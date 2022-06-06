const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryControler');

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);

module.exports = router;