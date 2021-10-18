const  mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true
    },
    Phoneno : {
        type : String,
        required : true,
        trim : true,
        minlength : 10,
        maxlength : 10

    },
    subject : {
        type : String,
        required : true
    },
    question : {
        type : String,
        required : true
    }
})
// create collection
const Question = new mongoose.model("Question",questionSchema);

module.exports = Question;