const router = require('express').Router()
const {Student, Teacher} = require('../models')

router.get('/',(req, res)=> {
    res.render('register')
})

router.get('/student',(req, res)=> {
    res.render('register-student')
})

router.post('/student',(req,res)=> {
    
    Student
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        res.send(err)
    })
    
})

router.get('/teacher',(req, res)=> {
    res.render('register-teacher')
})

router.post('/teacher',(req,res)=> {
    
    Teacher
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        res.send(err)
    })
    
})


module.exports = router