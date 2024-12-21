import express from "express"
import lecModel from "../../models/Lecturers/Lecturers.js";

const router = express.Router()

router.post("/registerLecturer", async(req, res)=> {
    try {

        let inputData = req.body;
        console.log(inputData);
        await lecModel.create(inputData)
        res.status(200).json(`Lecturer Registered Successfully!`)
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getalllecturers", async (req, res)=>{
    try {
         
        let findLec = await lecModel.find({})
        res.status(200).json(findLec)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getonelecturer", async (req, res)=>{
    try {

        let findOneLec = await lecModel.find({name: "Suhail Roushan"})
        res.status(200).json(findOneLec)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/editlecturer", async (req, res)=>{
    try {

       let editUser = await lecModel.updateOne({name: "ahmed irshad"}, {$set: {email: "ahmedirshad69@gmail.com"}}, {new: true})
        
        res.status(200).json(`lecturer edited successfully!🙌`)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.delete("/deleteonelecturer", async (req, res)=>{
    try {

       let delLec = await lecModel.deleteOne({name: "adnan devoloper"});
       res.status(200).send(`Lecturer deleted Successfully!🙌`)
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deletealllecturers", async (req, res)=>{
    try {

        let delAll = await lecModel.deleteMany({});

        console.log(delAll);
        

        res.status(200).json({msg: 'all lecturers data is deleted✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


export default router