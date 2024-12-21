import mongoose from "mongoose"


const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 2
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    qualifications: {
        type: String,
        require: true
    },
    experience: {
        type: Number,
        minlength: 3
    }
})

let studentsModel = mongoose.model("myStudents", studentsSchema, "Students")


export default studentsModel