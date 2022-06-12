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

});

router.get('/login', (req, res)=>{
    res.render('auth//login')
});

router.post('/login', async (req, res) => {
    await authService.login(req.body)
    res.render('/')
})


module.exports = router;