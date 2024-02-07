import mongoose from "mongoose";


const vSchemma=new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    bookmark:{
        type:Boolean,
        default:false
    }

})


const video=mongoose.model("video",vSchemma);

export default video;