const express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = require('./routes/user-routes')

app.use(express.json());

app.use("/api/user", router);



mongoose.connect('mongodb+srv://deepesh:IINZVzwB2wQTg37W@cluster0.qpvs6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>
    app.listen(5000)
).then(()=>console.log("Connect to database and listening to port no. 5000")).catch((error)=>console.log(error))


// IINZVzwB2wQTg37W