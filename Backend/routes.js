const express=require("express")
const routes =express.Router()
const {user,company} =require('./models');
const { createJwt } = require("./jwt");


routes.post('/register',async(req,res)=>{
    const {name,email,password,phone,city,state}=req.body;
    if(!name||!email||!password||!phone||!city||!state){

        return res.send({status:false,message:"emptyfield"})
    }
    try {
        let emailcheck=await user.findOne({email})
        if(emailcheck)return res.send({status:false,message:"used Email"})
        let userentry=await user.create({name,email,password,phone,city,state})
        res.send({status:true,message:"Register succesfull",data:userentry})
    } catch (error) {
        console.log(error.message)
    }
})


routes.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){

        return res.send({status:false,message:"emptyfield"})
    }
    try {
        let olduser=await user.findOne({email})
        if(!olduser)return res.send({status:false,message:"Not Register"})
        if(olduser.password!==password)res.send({status:false,message:"Wrong Password"})
        let token= createJwt({id:olduser._id})
        if(!token)return res.send({status:false,message:"unable to Login"})
        return res.send({status:true,message:"Login Successful",token:token})
    } catch (error) {
       console.log(error) 
    }
})


//adding company
routes.post('/addCompany',async(req,res)=>{
    const {founded,companyName,companyAddress,City,totalReview}=req.body;
    if(!founded||!companyName||!companyAddress||!City)return res.send({status:false,message:"emptyfield"})
    console.log(req.body)
    let oldCompany = await company.findOne({companyName:companyName})
    if(oldCompany)return res.send({status:false,message:"Company Already exist"})
  let companyentry=await company.create({founded,companyName,companyAddress,City,totalReview})
  res.send({status:true,message:"Company Added",data:companyentry})
})


//fetching all Company
routes.get('/allcompany',async(req,res)=>{
    let fetchAllCompanies=await company.find();
    res.send({status:true,message:"All company data",data:fetchAllCompanies})

})


//add ratting
routes.post('/addRatting',async(req,res)=>{
    let fetchAllRatting=await company.findByIdAndUpdate(req.body.id,{ratting:req.body.starts},{new:true});
    res.send({status:true,message:"All company data",data:fetchAllRatting})

})



module.exports={routes}