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
        Zone.findOne({_id: id}, function (err, zone) {
            if (err) {
                callback(err, null);
                return;
            }
            else {
                callback(null, zone);
            };
        });
    },
    create: function () {

    },
    update: function () {

    },
    destroy: function () {

    }
}
