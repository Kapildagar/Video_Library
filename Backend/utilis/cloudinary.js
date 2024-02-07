import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.config({  
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log(process.env.CLOUDINARY_API_SECRET);
        console.log(localFilePath)
        if (!localFilePath) return null
        //upload the file on cloudinary
        //  console.log(localFilePath)
        const response = await cloudinary.uploader.upload(`${localFilePath}`, {
            resource_type: "auto",
            folder:"blog_avatar"
        })
        console.log(response)
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        // fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}