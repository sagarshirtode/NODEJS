const express = require('express');
const app = express();
const router = express.Router();
const croute = require('./routes/courses');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');

app.use(bodyParser.json());
app.use("/api/v1/course", croute)
mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => console.log('Connected!'));

app.listen(process.env.PORT,()=>{
    console.log('server is running..........'+process.env.PORT);
});