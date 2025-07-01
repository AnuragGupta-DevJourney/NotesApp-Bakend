
import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required :  true
    },
    isCompleted : {
        type : Boolean,
        default : false
    }

} , {timestamps : true})

const Notes = mongoose.model("Notes" , notesSchema)

export default Notes