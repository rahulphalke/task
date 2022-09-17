"use strict";
const{ con}     = require('../config/db');

exports.viewUser = async function (request) {
    const [results,metadata] = await con.query("SELECT * FROM users_tbl",{});   
}

exports.validateEmail = async function({email}){
    try{
        let sql = `SELECT * FROM  user_tbl WHERE email = ?`;
        const [result,metadata] = await con.query(sql,{replacements:[email]})
        if(result.length > 0){
            return {status:true,msg:'Already Available',is_valid:0}
        }else{
            return {status:true,msg:'new Email',is_valid:1}
        }
    }catch(e){
        return {status:false,msg:"Server Error : "+e.message,is_valid:0}
    }
}

exports.UserList = async function(req){
    try{
    let GetSQl  = `SELECT * FROM user_tbl`;
    const [resultData,metadata] = await con.query(GetSQl,{ });
        return {status:true,data:resultData};
    }catch(e){
        return {status:false,msg:'Server Error: '+e.message};
    }  
}

exports.InsertUser = async function(req){
    try{    
    let {name,email,phone,city,state,zip} = req;
    let InsertSQl = `INSERT INTO user_tbl (name,email,  phone, city,state, zip_code) VALUES (?,?, ?, ?, ?, ?)`;
    const [insertID,metadata] = await con.query(InsertSQl,{
        replacements:[name,email,phone,city,state,zip]
    });   
    if(insertID){
        return {status:true,msg:"Registration Completed"}
    }else{
        return {status:false,msg:"Something Went Wrong Please Try Again"}
    }
    }catch(e){
        return {status:false,msg:"Server Error : "+e.message}    
    }
}
