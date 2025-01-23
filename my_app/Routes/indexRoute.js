import express from "express";
import UserModel from "../models/UserModel.js";

var route = express.Router();

route.get("/",(req,res)=>{
res.render("index/index");
})
 route.get("/features",(req,res)=>{
        res.render("index/login");
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
 route.get("/login",(req,res)=>{
        res.render("index/login")
 })
 route.get("/sign",(req,res)=>{
       res.render("index/sign")
})
route.get("/changepassword",(req,res)=>{
       res.render("index/changepassword")
})
route.get("/order",(req,res)=>{
       res.render("index/order");
   })




   
route.post("/registerUser",(req,res)=>{
       var data= req.body;
       UserModel.registerUserData(data).then((result)=>{
              console.log(+result);
              res.render("index/login",{loginSuccessful: true,message: "Hello!..."+data.username});
       }).catch((err)=>{
              res.status(201).json({'status':'false','error':err,'message':'register failed'})
       })
});

route.post("/loginUser",(req,res)=>{
       var data = req.body;
       UserModel.loginUserData(data).then((result)=>{
              if(result[0].username == data.username)
              {
                     res.render("features/features",{loginSuccessful: true,message: "Hello!..."+data.email});
              }
              else{
                     console.log("err is "+err,{loginUnSuccessful: true,message: "Invalid Credentials!..."});
              }
       }).catch((err)=>{
              res.send("Err is :"+err);
              res.status(201).json({'status':'false','error':err,'message':'register failed'})
       })
});
route.post("/changepassword",(req,res)=>{
       var data = req.body;
       UserModel.changepassword(data).then((result)=>{
              console.log(+result);
              res.render("index/login");
              //res.status(200).json({'status':'true','error':err,'message':'password change Successful'})
       }).catch((err)=>{
              res.send("Err is:" +err);
              res.status(201).json({'status':'false','error':err,'message':'password change failed'})
       })
})
route.post("/order",(req,res)=>{
       var data = req.body;
       UserModel.saveOrder(data).then((result)=>{
           res.render("index/orderplace");
       })
       .catch((err)=>{
           res.send("error is "+err);
       })
   });
   
   route.post("/contact",(req,res)=>{
       var data = req.body;
       UserModel.saveData(data).then((result)=>{
           res.render("index/thanks");
       })
       .catch((err)=>{
           res.send("error is "+err);
       })
   });
   
   
export default route;