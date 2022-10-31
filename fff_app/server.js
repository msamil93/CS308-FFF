const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();

dotenv.config({path:'fff_app\config.env'});
const PORT = process.env.PORT || 3000

// log request
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine","ejs")
app.set("vievs",path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});
