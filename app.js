const express = require('express')
const user = require('./models/user')
app = express();
const productHelper = require('./controller/helpers/index')
const jwt = require("jsonwebtoken")
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')
const loginController = require('./controller/login')
const cookieParser = require('cookie-parser')
const productsRoute = require('./routes/product')
const {authenticateToken} = require('./controller/helpers/tokenauthenticate')
const database = require('./db')
const apiRoute = require('./routes/apiauth')
const mainRoute = require('./routes/main')
const logoutController = require('./controller/helpers/logout')
const {authenticateapi} = require('./controller/helpers/apiauthenticate')
const { send, nextTick } = require('process');
const {tokenauthenticate} = require('./controller/helpers/tokenauthenticate');
const {info,warn,error} = require('./logger')
const {ipLog} = require('./models/iplogging')
const {deviceLogging} = require("./controller/helpers/deviceLogging")
app.use(express.urlencoded({extended:true})) 
app.use(express.json())
app.post('/loginregister',loginController.LoginSearch)
app.get('/logout',logoutController.logout)
app.set('view engine', 'ejs')
// Routes Post Middleware
app.use(cookieParser())
app.use('/', mainRoute)
app.use('/apiauth', apiRoute)
app.use('/register',(req,res)=>{
    res.render('register')
})
// Device Logging Module
app.use(deviceLogging)
// Settings routes, Route information moved to routes folder 
app.use('/products', productsRoute) /// Api key based authentication 
app.use('/user', require('./routes/user')) // Login based authentication
// Setting a view folder . View Engine / EJS installed from NPM template
app.use('/views',express.static(path.join(__dirname,"public")))

// Setting a reply for non existent paths
app.get('*',(req,res)=>{
    res.send('Wrong page fella')
})

// Setting the app to listen to PORT
app.listen(process.env.PORT || 8888 );
//----------------------------------------------------------------------------------------------//

// // Tutorial on microservices 
// https://medium.com/swlh/the-complete-microservice-tutorial-part-1-building-user-service-with-grpc-node-js-and-mongodb-73e70ed80148 


