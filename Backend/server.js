const express=require("express")
const app =express()
var cors = require('cors')
app.use(cors({origin: true, credentials: true}));
require("dotenv").config()
app.use(express.json())
const mongoose=require("mongoose");
const { routes } = require("./routes");
mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("DB connected...")}).catch(()=>{console.log("DB not connected...")})
app.use("/",routes)
//-------------------------------------------------------------------------------------------->
//-------------------------------------------------------------------------------------------->
app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}......`)
})
// DefaultsData()
