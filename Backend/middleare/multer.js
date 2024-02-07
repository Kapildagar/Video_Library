import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null,"/temp")
      console.log(file)
      // cb(null)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file)
      cb(null, uniqueSuffix+file.originalname)
    }
  })
  
 export const upload = multer({ storage: storage })