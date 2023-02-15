const express = require('express');
const router = express.Router();

const aws = require("aws-sdk");
aws.config.update({
    accessKeyId: "AKIAY3L35MCRVFM24Q7U",
    secretAccessKey: "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",
    region: "ap-south-1"
})
let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
    let s3= new aws.S3({apiVersion: '2006-03-01'});
    var uploadParams= {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",
        Key: "abc/" + file.originalname,
        Body: file.buffer
    }
    console.log(key)
    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        return resolve(data.Location)
    })
   })
}
// module.exports=uploadFile
// ===================================

const uploadAWS = async function (req, res) {
    try {
        let files = req.files;
        console.log("files",files)
        if (!files) {
            return res.status(400).send({ status: false, message: "Profile Image is required" })
        }
        let userImage = await uploadFile(files[0]);
        data.profileImage = userImage;
        res.status(201).send({ status: true, message: "user Successfully created", data: userData })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
};

// router.post("/uploadimage", createUser);
router.post("/uploadimage1", uploadAWS);

router.get("/test", function(req,res){
    res.send("hello")
    console.log("hi2")
});
module.exports=router
