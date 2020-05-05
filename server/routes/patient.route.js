const {Router} = require('express');
const router = Router();
module.exports = router;
const { check, validationResult } = require('express-validator')
const Patient = require('../models/Patient')

//api/client/patient
router.post('/patient',
    [],
    async (req, res) => {
        try {
            const {name, birthDate, sex, phoneNumber} = req.body
            const candidate = Patient.findOne({name})
            if(candidate) {
                res.status(400).message('This patient already exists')
            }
            const patient = new Patient({name, birthDate, sex, phoneNumber})
            await patient.save()

            res.status(201).json({message: 'Patient has been created', patient})
        } catch (e) {
            res.status(500).json({message: 'Something has went wrong, try again!'})
        }
    }
)