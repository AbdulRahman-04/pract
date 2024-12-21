import express from "express"
import mongoose from "mongoose";
import config from "config"
import "./utils/dbConnect.js"
import lecRouter from "./controllers/lecturers/index.js"
import managementRouter from "./controllers/lecturers/index.js"
import studentsRouter from "./controllers/students/index.js"

const app = express();

const PORT = config.get("PORT")

app.use(express.json());

app.get("/", (req, res)=>{
    try {

        res.status(200).json({msg: "HELLO WORLD!✅"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.use("/api", lecRouter);
app.use("/api", managementRouter)
app.use("/api", studentsRouter)



app.listen(PORT, ()=>{
    console.log(`your server is up and running at ${PORT}`);
    
})