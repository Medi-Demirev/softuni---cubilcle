const router = require('express').Router();

const authService = require('../services/authService');

router.get('/register', (req, res)=>{
    res.render('auth//register')
});

router.post('/register',  async (req, res)=>{
    let createdUser =  authService.register(req.body);

    if(createdUser) {
        res.redirect('/auth/login')

    }else{
        res.redirect('404')
    }

})

module.exports = router;