// Permet d'importer mongoose
const mongoose = require('mongoose');

// Permet la création d'un schéma pour les données
const thingSchema = mongoose.Schema({
    title: { type: String, required: true }, // Clé associée à un objet
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);
