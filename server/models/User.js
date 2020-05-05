const {Schema, model} = require('mongoose')

const schema = new Schema({
    email: {required:true, unique: true, type: String },
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true}
})

module.exports = model('User', schema)