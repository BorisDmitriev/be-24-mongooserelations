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
  const articles = await Article.find({manufacturer: "64905c8ec6806fca7bab1dbe"}).populate("manufacturer")
   
  const _articles = articles.map( article => ( 
       {
          Manufacturer: article.manufacturer.name,
          Article: {
            Description: article.description,
            Price: article.price
          }
       }
   ) )

  
  app.get('/',  (req, res) => {
    res.json( _articles )
  })
  
  db.close().then(() => console.log("closed"));
});

app.listen('3000', () => {
    console.log(`Server is running`);
});