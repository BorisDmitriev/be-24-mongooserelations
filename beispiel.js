const mongoose = require('mongoose');
require('dotenv').config();

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open', () => {
  console.log('Mit DB verbunden');
  // Dein Code



  
  db.close();
});
