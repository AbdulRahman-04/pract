import mongoose from "mongoose"

const lecSchema = new mongoose.Schema({
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

let lecModel = mongoose.model("myLecs", lecSchema, "Lecturers")


export default lecModel