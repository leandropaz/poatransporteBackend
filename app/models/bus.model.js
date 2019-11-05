const mongoose = require('mongoose');

const BusSchema = mongoose.Schema({
    id: String,
    codigo: String,
    nome: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Bus', BusSchema);