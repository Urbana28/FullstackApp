const {Schema, model} = require('mongoose');

const schema = new Schema({
        name: {required: true, type: String},
        surname: {required: true, type: String},
        patronymic: {required: true, type: String},
        birthDate: {required: true, type: String},
        gender: {required: true, type: String},
        phoneNumber: {required: true, type: String}
    }
)

module.exports = model('Patient', schema)