const mongoose = require("mongoose")

const manufacturerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    industry: { type: String },
}) 

module.exports = mongoose.model("Manufacturer", manufacturerSchema)