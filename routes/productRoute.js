const express=require("express")
const path=require("path")
const productRouter=express.Router()

const products=[]

productRouter.get("/", (req,res)=>{
    res.render("addProduct",{path: "/addProduct"})
})

productRouter.post("/product",(req,res)=>{
    console.log(req.body)
    products.push({title:req.body.title,price:req.body.price,desc:req.body.desc})
    res.redirect("/")
})



module.exports={
    productRouter,products
}