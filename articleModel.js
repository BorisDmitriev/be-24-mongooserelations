const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    description: { type: String },
    price: { type: Number },
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manufacturer"
    }
}) 

module.exports = mongoose.model("Article", articleSchema)