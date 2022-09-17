"use strict";
const User = require("../models/users");


exports.UsersList = async function(req,res){
    let UserData  = await User.UserList(req);
    let msg       = req.flash('message');
    res.render('pages/Home',{data:UserData,msg:msg});
}

exports.register = async function(req,res){
    res.render('pages/register');
}   

exports.CheckEmail = async function(req,res){
    let validateEmail  = await User.validateEmail(req.body);
    res.send(validateEmail);
}

exports.SaveUser = async function(req,res){
    let response = await User.InsertUser(req.body);
    req.flash('message', response.msg);
    return res.redirect('/user-list');
}

exports.InsertUser = async function(req, res, next) {
    let response = await User.InsertUser(req.body)
    req.flash('message', response.msg);
    return res.redirect('/user-list');
};


