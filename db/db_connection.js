
import mongoose from "mongoose";
import "dotenv/config"

async function mongoDB_connection(){
  
    try { 
        const response = await mongoose.connect(process.env.MONGO_DB_LOCAL_URL)
        const db = mongoose.connection
        db.on("connected" , () => {
            console.log("mongoDB connected succesfully" , response.connection._connectionString)
        })
        console.log("mongoDB connected succesfully" , response.connection._connectionString)
    } catch (error) {
        console.log("Internal db Error" , error)
        console.log(process.env.MONGO_DB_LOCAL_URL)
    }   

}

export default mongoDB_connection