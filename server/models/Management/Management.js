import mongoose from "mongoose"

const managementSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 2
    },
    email: {
        type: string,
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

let managementModel = mongoose.model("myManagement", managementSchema, "Management")


export default managementModel