import mongoose from "mongoose"
import config from "config"

async function dbConnect(){

    try {

        let dbUrl = config.get("DB_URL");
        await mongoose.connect(dbUrl);
        console.log('DATABASE CONNECTED SUCCESSFULLY!✅');
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


}
dbConnect()