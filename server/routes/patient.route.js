const {Router} = require('express');
const router = Router();
module.exports = router;
const { check, validationResult } = require('express-validator')
const Patient = require('../models/Patient')

//api/client/patient
router.post('/patient',
    [
        check('name', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('surname', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('patronymic', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('birthDate', 'The format of the entered data does not match - dd.mm.yyyy').matches(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/),
        check('phoneNumber', 'The format of the entered data does not match - +375xxxxxxxxx').matches(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/),
        check('gender', 'Gender can be male or female').custom((value, {req}) => ('female'=== req.body.gender))

    ],
    async (req, res) => {
        try {
            console.log('Body', req.body)
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect patient data'
                })
            }
            const {name,surname, patronymic, birthDate, gender, phoneNumber} = req.body
            const candidate = await Patient.findOne({name})
            if(candidate) {
                res.status(400).json({message: 'This patient already exists'})
            }
            const patient = new Patient({name,surname, patronymic, birthDate, gender, phoneNumber})
            await patient.save()
            res.status(201).json({message: 'Patient has been created', patient})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something has went wrong, try again!'})
        }
    }
)