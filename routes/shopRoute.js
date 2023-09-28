const express=require("express")
const path=require("path")
const { products } = require("./productRoute")
const shopRouter=express.Router()

shopRouter.get("/",(req,res)=>{
    console.log(products)
    res.sendFile(path.join(__dirname,"../","pages/shop.html"))
})


module.exports={
    shopRouter
}