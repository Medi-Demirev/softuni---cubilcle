const router = require('express').Router();
const cubeService = require('../services/cubeService');
const mongoose = require('mongoose')

router.get('/create', (req, res)=>{
    res.render('create');

});

router.post('/create', async (req, res) => {
    const cube = req.body;

    // Validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }

    // Save data
    try {
        await cubeService.create(cube);

        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/details/:id',  async (req, res)=>{
    
    if( !mongoose.Types.ObjectId.isValid(req.params.id) ) return false;

    const cube =   await cubeService.getOne(req.params.id).lean()
    res.render('details', {cube})
})
module.exports = router;