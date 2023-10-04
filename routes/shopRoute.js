const express=require("express")
const path=require("path")
const { products } = require("./productRoute")
const { privateDecrypt } = require("crypto")
const shopRouter=express.Router()

shopRouter.get("/",(req,res)=>{
    console.log(products)
    res.render("shop",{products:products,docTitle:"Shop",path:"/shop"})
})


module.exports={
    shopRouter
}