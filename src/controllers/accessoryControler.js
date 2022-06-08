const router = require('express').Router();
const accessoryService = require('../services/accessoryService');

router.get('/create',(req, res)=>{

    res.render('accessory/create')
});

router.post('/create',  (req, res)=>{
    
      accessoryService.create(req.body)

    res.redirect('/')
})

module.exports = router;