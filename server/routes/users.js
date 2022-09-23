//var express = require('express');
//var router = express.Router();
import express from 'express';
const router=express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('Welcome Babel-Nodemon');
  router.get('/',(req,res,next)=>{
    res.send('Welcome Babel-Nodemon');
  });

//  module.exports = router;
export default router;
