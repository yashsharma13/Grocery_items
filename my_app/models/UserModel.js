import db from '../database/db_connection.js'
var UserModel = function()
{
    this.loginUserData=(req)=>{
        return new Promise((resolve,reject)=>{
            db.getConnection((err,con)=>{
                if(!err)
                {
                    var sql="Select * from yash where email=? and password = ? ";
                    con.query(sql,[req.email,req.password],(err,result)=>{
                        if(!err)
                        {
                           // console.log("Hello Result is : "+JSON.stringify(result));
                            //console.log("Hello Result is : "+result);
                            resolve(result);
                        }
                        else{
                            reject(err);
                          //  console.log("Error Result is : "+err);
                        }
                    });
                }
                else
                {
                    console.log("error is :"+err);
                }
            });
        });
    };


 this.registerUserData =(req)=>{
    return new Promise((resolve,reject)=>{
        db.getConnection((err,con)=>{
            if(!err)
            {
                var sql ="insert into yash(name,email,password) values (?,?,?) ";
                con.query(sql,[req.name,req.email,req.password],(err,result)=>{
                    if(!err)
                    {
                      // console.log("Result is :"+JSON.stringify(result));
                       // console.log("Hello Result is: "+result);
                        resolve(result);
                    }
                    else{
                        reject(err);
                        //console.log("Error Result is : "+err);
                    }
                });
            }
            else{
                console.log("Error is : "+err);
            }
        });
    });
 };

 
 this.saveData =(req)=>{
    return new Promise((resolve,reject)=>{
        db.getConnection((err,con)=>{
            if(!err)
            {
                var sql ="insert into contact(name,email,subject,message) values (?,?,?,?) ";
                con.query(sql,[req.name,req.email,req.subject,req.message],(err,result)=>{
                    if(!err)
                    {
                      // console.log("Result is :"+JSON.stringify(result));
                       // console.log("Hello Result is: "+result);
                        resolve(result);
                    }
                    else{
                        reject(err);
                        //console.log("Error Result is : "+err);
                    }
                });
            }
            else{
                console.log("Error is : "+err);
            }
        });
    });
 };

 

 this.saveOrder = (req)=>{
    return new Promise((resolve,reject)=>{
        db.getConnection((err,con)=>{
            if(!err)
            {
            var sql="insert into orderd(name,email,address,phone) values (?,?,?,?) ";
            con.query(sql,[req.name,req.email,req.address,req.phone],(err,result)=>{
                if(!err)
                {
                    console.log("Hello Result is : "+JSON.stringify(result));
                    console.log("Hello Result is : "+result);
                    resolve(result);
                }
                else
                {
                    reject(err);
                    console.log("Error Result is : "+err);
                }
            });
            }
            else
            {
            console.log("error is"+err);
            }
        });
    });
};


 this.changepassword =(req)=>{
    return new Promise((resolve,reject)=>{
        db.getConnection((err,con)=>{
            if(!err)
            {
                var sql="UPDATE yash SET password = ? where email = ?";
                con.query(sql,[req.password,req.email],(err,result)=>{
                    if(!err)
                    {
                        resolve(result);
                    }
                    else{
                        reject(err);
                    }
                });
            }
            else{
                console.log("Error is:"+err);
            }
        });
    });
 };

};

export default new UserModel();