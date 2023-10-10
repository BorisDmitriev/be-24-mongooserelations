const mongoose = require("mongoose")

const movesSchema = new mongoose.Schema({
    name: { type: String },
    keys: { type: String },
},
{ _id: false },
)

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialMoves: [ movesSchema ] 
}) 

module.exports = mongoose.model("Character", characterSchema)