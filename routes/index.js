const router = require('express').Router()

router.get('/',(req,res) => {
    res.render('home')
})

router.get('/login', (req, res)=> {
    res.render('login')
})

router.get('/register', (req, res)=> {
    res.render('register')
})

router.post('/register', (req, res)=> {
    
})

router.post('/login', (req, res)=> {

})
module.exports = router