import video from "../models/video.models.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js";
const Createvideo = async (req, res, next) => {
    try {
        console.log("working")
        const fileData = await req.file;
        console.log(fileData)
        const name=req.body.name;
        const path=fileData.path;
        
        console.log(path);
        if (!fileData) {
            res.status(400).json("No file Data Recieved");
        }
        const cresponse=await uploadOnCloudinary(path)
        const url=cresponse.url;
        if(!url){
            res.status(400).json({"error":"file cannot be uplladede"});
        }

        // console.log(url);
         const data=await video.create({name,url})

        
        // console.log(fileData);
        res.status(200).json({
            data,
            success:true,
            message:"video sucessfully uploaded"
        })
    }
    catch (err) {
        console.log(err);
    }
}

const getAllvideo=async(req,res,next)=>{
    try{
        const data=await video.find();
         res.status(200).json({
            "data":data,
            success:true,
            message:"All video send sucessfully"

         })

    }
    catch(err){
        res.send(400).json({"error":err});
    }
}

const addBookk=async(req,res,next)=>{
    try{
         const {id}=req.params;
         console.log(id)
         console.log(req.body);
         const data=await video.findById(id);
         const ndata=await video.findByIdAndUpdate({_id:id},{
                bookmark:!data.bookmark
         },{new:true})
         console.log(ndata);
         res.status(200).json({
            data:ndata,
            success:true,
            message:"Data Added to Bookmark"
         })
         
    }
    catch(err){
        res.send(400).json({"error":err});
    }
}

const DeleteBook=async(req,res,next)=>{
    try{
         const {id}=req.params;
        //  console.log(id)
        //  console.log(req.body);
        //  const data=await video.findById(id);
         const ndata=await video.findByIdAndDelete({_id:id})
        //  console.log(ndata);
         res.status(200).json({
            success:true,
            message:"Delete Added to Bookmark"
         })
         
    }
    catch(err){
        res.send(400).json({"error":err});
    }
}



// const setBookmarkvideo=async(req,res,next)=>{

// }
export { Createvideo ,getAllvideo,addBookk,DeleteBook} 