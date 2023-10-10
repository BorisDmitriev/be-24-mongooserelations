const mongoose = require('mongoose');
require('dotenv').config();

const Character = require("./characterModel")

const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27017/demo1';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on('error', error => console.log('Mongoose-Error:', error));

db.once('open', async () => {
  console.log('Mit DB verbunden');
  // Dein Code

  const character = new Character({
     name: "Ryu",
     specialMoves: [
        {
            name: "Hadoken",
            keys: '↓ ↘ → P'
        },
        {
            name: "Tatsumaki Senpukyaku",
            keys: '↓ ↙ ← K'
        },
        {
            name: "Shoryuken",
            keys: '→ ↓ ↘ → P'
        },
     ]    
  })

  await character.save()
  
  db.close();
});
