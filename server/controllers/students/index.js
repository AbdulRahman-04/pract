import express from "express"
import studentsModel from "../../models/Students/Students.js";

const router = express.Router()

router.post("/registerstudent", (req, res)=> {
    try {

        let inputData = req.body;
        console.log(inputData);
        res.status(200).json(`student Registered Successfully!`)
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getallstudents", (req, res)=>{
    try {

        res.status(200).json({msg: "all your students data is here✅"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getonestudent", (req, res)=>{
    try {

        res.status(200).json({msg: 'your one student is here✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/editstudent", (req, res)=>{
    try {

        res.status(200).json({msg: 'your edited student is here✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.delete("/deleteonestudent", (req, res)=>{
    try {

        res.status(200).json({msg: 'student selected, data is deleted✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deleteallstudents", (req, res)=>{
    try {

        res.status(200).json({msg: 'all students data is deleted✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


export default router