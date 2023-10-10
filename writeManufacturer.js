const mongoose = require('mongoose');
require('dotenv').config();

const Manufacturer = require("./manufacturerModel")

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo1';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open', async () => {
  console.log('Mit DB verbunden');
  // Dein Code

  const manufacturer = new Manufacturer(
        {
            name: "Gigabyte",
            industry: 'GPU'
        },  
)

await manufacturer.save()
  
db.close();
});
