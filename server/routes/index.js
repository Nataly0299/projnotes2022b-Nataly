//var express = require('express');
//var router = express.Router();
//ES6
import express from 'express';
const router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //View-Model es title:'Express'
 // res.render('index', { title: 'Express' });
 router.get('/',(req, res, next)=>{
  res.render('index', { title: 'Express',author:'Brenda nataly'});
});

export default router;

//module.exports = router;

