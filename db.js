
const mongoose = require('mongoose')
mongoose
.connect("mongodb+srv://AB:Rj2tYHOnCRyKAsKD@cluster0.3l0cm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(res=> console.log("connected succ"))
.catch(err=> console.log(err))