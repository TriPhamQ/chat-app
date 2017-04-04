var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    user: {type: String, default: ''},
    body: {type: String, default: ''},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);
