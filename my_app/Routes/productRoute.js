import express from "express";
//import UserModel from "../models/UserModel.js";
var route = express.Router();

route.get("/",(req,res)=>{
res.render("index/index");
})


 route.get("/features",(req,res)=>{
        res.render("features/features");
        })
        route.get("/categories",(req,res)=>{
              res.render("categories/categories");
              })
              route.get("/contact",(req,res)=>{
                     res.render("contact/contact");
                     })
                 
          
 route.get("/product",(req,res)=>{
            res.render("product/product");
            })

    
export default route;