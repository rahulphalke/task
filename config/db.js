"use strict";
const mysql     = require('mysql');
const env_value = require('./dotenvConfig');

const Sequelize = require('sequelize');
const con       = new Sequelize(env_value.db_name,env_value.db_user, env_value.db_password, {  host: 'localhost',  dialect: 'mysql'});

module.exports = {con,Sequelize}