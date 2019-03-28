const router = require('express').Router()
const {Student, Teacher} = require('../models')

router.get('/',(req, res)=> {
    res.render('register')
})

router.get('/student',(req, res)=> {
    let errQuery;
    if (req.query) {
        errQuery = req.query
    }
    res.render('register-student',{errQuery})
})

router.post('/student',(req,res)=> {
    
    Student
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        res.redirect(`/register/student/?${err}`)
    })
    
})

router.get('/teacher',(req, res)=> {
    let errQuery;
    if (req.query) {
        errQuery = req.query
    }
    res.render('register-teacher',{errQuery})
})

router.post('/teacher',(req,res)=> {
    Teacher
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        res.redirect(`/register/teacher/?${err}`)
    })
    
})


module.exports = router