const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
    email: {required:true, unique: true, type: String },
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    links: [{ type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('User', schema)