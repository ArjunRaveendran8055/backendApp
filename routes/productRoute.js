const express=require("express")
const path=require("path")
const productRouter=express.Router()

const products=[]

productRouter.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../","pages/addProduct.html"))
})

productRouter.post("/product",(req,res)=>{
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect("/")
})



module.exports={
    productRouter,products
}