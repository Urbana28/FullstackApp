const {Router} = require('express');
const router = Router();
module.exports = router;
const { check, validationResult } = require('express-validator')
const Patient = require('../models/Patient')
const genderVariants = ['женский', 'мужской', 'male', 'female']

//api/client/patient create
router.post('/patient',
    [
        check('name', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('surname', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('patronymic', 'Must be only alphabetical chars').exists().trim().escape().isLength({min:2}),
        check('birthDate', 'The format of the entered data does not match - dd.mm.yyyy').matches(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/),
        check('phoneNumber', 'The format of the entered data does not match - +375xxxxxxxxx').matches(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/),
        check('gender', 'Gender can be male or female').custom((value) => genderVariants.some(gender => gender === value))

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

//api/client/patient by id

router.get('/patient/:id',  async (req, res) => {
    try {
        const id = req.params.id
        const requiredPatient = await Patient.findById(id);
        if(!requiredPatient) {
            res.status(400).json({message: "Patient doesn't exist"})
        }
        res.status(200).json({message: 'Patient info', requiredPatient})
    } catch (e) {
        res.status(500).json({message: 'Something has went wrong, try again!'})
    }
}
    )

//api/client/all patients

router.get('/patients',
    async(req, res) => {
    try {
        const patients = await Patient.find()
        if(patients === null) {
            res.status(400).json({message: 'Database is empty'})
        }
        res.status(200).json({message: 'All patients', patients})
    } catch (e) {
        res.status(500).json({message: 'Something has went wrong, try again!'})
    }
    }
    )