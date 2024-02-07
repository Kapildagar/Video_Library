import { Router } from "express";
import { Createvideo, DeleteBook, addBookk, getAllvideo } from "../Controller/video.controller.js";
import multer from "multer";
// import { upload } from "../middleare/multer.js";


const upload=multer({dest:"../temp"})
const routes=Router();
routes.route("/createvideo").post(upload.single('videofile'),Createvideo);
routes.route("/Allvideo").get(getAllvideo);
routes.route("/addBook/:id").post(addBookk);
routes.route("/deleteVideo/:id").delete(DeleteBook)

export default routes
