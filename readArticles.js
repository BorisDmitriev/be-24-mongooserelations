const express = require("express");
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();

const Article = require("./articleModel")
const Manufacturer = require("./manufacturerModel")

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo1';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open',  async () => {
  console.log('Mit DB verbunden');
  // Dein Code
  const article = await Article.find().populate("manufacturer")
   
  
  app.get('/',  (req, res) => {
    res.json( article )
  })
  
  db.close().then(() => console.log("closed"));
});

app.listen('3000', () => {
    console.log(`Server is running`);
});