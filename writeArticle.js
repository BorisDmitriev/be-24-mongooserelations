const mongoose = require('mongoose');
require('dotenv').config();

const Manufacturer = require("./manufacturerModel")

const Article = require("./articleModel")

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open', async () => {
  console.log('Mit DB verbunden');
  // Dein Code

  const manufacturerId = ( await Manufacturer.find({name: 'Gigabyte'}) )[0]._id.toString()

  const article = [ 
        {
            description: "GPU 2070 super",
            price: 5000,
            manufacturer: manufacturerId,
        },
        {
          description: "Motherboard AMD A4",
          price: 280,
          manufacturer: manufacturerId,
      } 
  ]
   
 await Article.create(article)
  
db.close();
});
