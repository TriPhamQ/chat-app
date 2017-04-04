var Zone = require('../models/Zone.js');

module.exports = {
    find: function (params, callback) {
        Zone.find(params, function (err, zones) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, zones);
            };
        });
    },
    findById: function (id, callback) {
        Zone.findById(id, function (err, zone) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, zone);
            };
        });
    },
    create: function (params, callback) {
        params['zip'] = params['zip'].split(',');
        params['zip'].forEach(function (value, index){
            params['zip'][index] = value.trim();
        });
        Zone.create(params, function (err, zone) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, zone);
            };
        });
    },
    update: function (id, params, callback) {
        Zone.findByIdAndUpdate(id, params, {new: true}, function (err, zone) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, zone);
            };
        });
    },
    delete: function (id, callback) {
        Zone.findByIdAndRemove(id, function (err) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, null);
            };
        });
    }
};
