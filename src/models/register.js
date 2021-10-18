const  mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        trim : true,
        minlength : 10,
        maxlength : 10

    },
    branch : {
        type : String,
        required : true
    }
})
// create collection
const Register = new mongoose.model("Register",registerSchema);

module.exports = Register;