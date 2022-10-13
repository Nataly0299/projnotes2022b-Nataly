//Biblioteca de 3ros para manejar errores http 
//var createError = require('http-errors');
//ES6
import createError from 'http-errors';
//El fremework express
//var express = require('express');
import express from'express';
//Biblioteca del nucleo de node que sirve para administrar rutas
//var path = require('path');
import path from 'path';
//Biblioteca externa que sirve para administrar cookis
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//Biblioteca que registra en consola solicitudes del cliente
//var logger = require('morgan');
import logger from'morgan';

import webpack from 'cookie-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

//Definición de rutas
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

import indexRouter from './routes/index';
import usersRouter from'./routes/users';
//Creando una instancia de express
//var app = express();
const app = express();

// view engine setup
//Configura el motor de plantillas 
//1. Establecer donde estarán las plantillas
//(Vistas ->Views)
//app.set("<nombre de la var>",<valor>)
app.set('views', path.join(__dirname, 'views'));
//console.log(`El valor del join es: ${path.join(__dirname,'views')}`);
//Establezco que motor precargado usare
app.set('view engine', 'hbs');

//Establezco Middleware
app.use(logger('dev'));
//Middleware para parsear a json la peticion 
app.use(express.json());
//Decodificar la url
app.use(express.urlencoded({ extended: false }));
//Parsear cookis
app.use(cookieParser());
//Servidor  de archivos estáticos 
app.use(express.static(path.join(__dirname,'..','public')));

//render requiere de una plantilla y send envia datos crudos 

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
//app.use(function(err, req, res, next) {
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Exportando la instancia del server "app"
//ES5
//module.exports = app;
//ES6
export default app;