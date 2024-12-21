import express from "express"
import managementModel from "../../models/Management/Management.js";

const router = express.Router()

router.post("/registernewmanagement", (req, res)=> {
    try {

        let inputData = req.body;
        console.log(inputData);
        res.status(200).json(`manager Registered Successfully!`)
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getallmanagers", (req, res)=>{
    try {

        res.status(200).json({msg: "all your managers data is here✅"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getonemanager", (req, res)=>{
    try {

        res.status(200).json({msg: 'your one manager is here✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/editmanager", (req, res)=>{
    try {

        res.status(200).json({msg: 'your edited manager is here✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.delete("/deleteonemanager", (req, res)=>{
    try {

        res.status(200).json({msg: 'manager selected, data is deleted✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deleteallmanagers", (req, res)=>{
    try {

        res.status(200).json({msg: 'all managers data is deleted✅'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


export default router