/**
 * Define the schema of Students collection to be stored in the DB
 */
const mongoose = require("mongoose")

// Schema / Collection -> Adding Validation/Checks
const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min :19
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 15
    },
    subjects : [String]
    
},{versionKey : false , timestamps : true})

//Go ahead and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema)

