var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ZoneSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    zip: {type: Array, default: []},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);
