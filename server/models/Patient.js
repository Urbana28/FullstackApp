const {Schema, model} = require('mongoose');

const schema = new Schema({
        name: {required: true, unique: true, type: String},
        birthDate: {required: true, type: String},
        sex: {required: true, type: String},
        phoneNumber: {required: true, type: String}
    }
)

module.exports = model('Patient', schema)