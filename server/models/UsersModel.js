const  mongoose  = require("mongoose");

const DataSchema = mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    },
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false})

const UsersModel = mongoose.model('users', DataSchema);
module.exports = UsersModel;

