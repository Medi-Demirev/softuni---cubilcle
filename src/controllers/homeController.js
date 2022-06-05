const router = require('express').Router();

const req = require('express/lib/request');
const res = require('express/lib/response');
const cubes = require("../db.json");

router.get('/',(req, res )=> {
    res.render('index', {cubes});

});

router.get('/about', (req, res )=> {
    res.render('about');

});


module.exports = router;