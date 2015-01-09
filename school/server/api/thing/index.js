'use strict';

var express = require('express');
var controller = require('./thing.controller');
// var controller=require('./thing.server');

var router = express.Router();

router.get('/', controller.index);
router.get('/find', controller.find);
router.get('/find/:id', controller.findById);
router.get('/findByLine/:line', controller.findByLine);
router.get('/insert',controller.insert);
router.get('/update/:line',controller.updateLine);
router.get('/delete/:line',controller.deleteByID);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;