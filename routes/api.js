var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');
var controllers = require('../controllers');

router.get('/:resource', function (req, res, next) {
    var resource = req.params.resource;
    var controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        })
    };

    controller.find(req.query, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'failed',
                message: err
            });
            return;
        }
        else {
            res.json({
                confirmation: 'success',
                results: results
            });
        };
    });
});

router.get('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        })
    };

    controller.findById(id, function (err, result) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        else {
            res.json({
                confirmation: 'success',
                result: result
            });
        };
    });
});

router.post('/:resource', function (req, res, next) {
    var resource = req.params.resource;
    var controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        })
    };

    controller.create(req.body, function (err, result) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        else {
            res.json({
                confirmation: 'success',
                result: result
            });
        };
    });
});

router.put('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        })
    };

    controller.update(id, function (err, result) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        else {
            res.json({
                confirmation: 'success',
                result: result
            });
        };
    });
});

router.get('/:resource/delete/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        })
    };

    controller.delete(id, function (err, result) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        else {
            res.json({
                confirmation: 'success',
                result: result
            });
        };
    });
});

module.exports = router
