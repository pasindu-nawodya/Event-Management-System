const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const evetRoute = require('./Routes/Event');
const userRoute = require('./Routes/User');

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/event',evetRoute);
app.use('/user',userRoute);

//get
app.get('/',(req,res)=>{
    res.send('AdEvento API');
})

//db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log('Database connected!')
)

app.listen(4000);
