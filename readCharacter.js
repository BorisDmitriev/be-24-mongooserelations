const express = require("express");
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();

const Character = require("./characterModel")

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo1';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open',  async () => {
  console.log('Mit DB verbunden');
  // Dein Code
  const character = await Character.find()
  
  app.get('/',  (req, res) => {
    res.json(character)
  })
  
  db.close().then(() => console.log("closed"));
});

app.listen('3000', () => {
    console.log(`Server is running`);
});