const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors') ;

// const multer = require("multer");
// const router = express.Router();
const app = express();
app.use(cors());
const route = require("./routes/route")
app.use(bodyParser.json());
// app.use(multer().any())
app.use(bodyParser.urlencoded({extended:true}))
console.log("hi")

app.use("/",route)

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
    console.log("hi3")

});