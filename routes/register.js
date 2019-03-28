const router = require('express').Router()
const {Student, Teacher} = require('../models')

router.get('/',(req, res)=> {
    res.render('register')
})

router.get('/student',(req, res)=> {
    let error = []
    if (req.query.err) {
        error.push(req.query.err)
    }
    res.render('register-student', {error})
})

router.post('/student',(req,res)=> {
    
    Student
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        let error = err.errors.map(el=> el.message)
        res.redirect(`/register/student/?err=${error}`)
    })
    
})

router.get('/teacher',(req, res)=> {
    let error = []
    if (req.query.err) {
        error.push(req.query.err)
    }
    res.render('register-teacher',{error})
})

router.post('/teacher',(req,res)=> {
    Teacher
    .create(req.body)
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=> {
        let error = err.errors.map(el=> el.message)
        res.redirect(`/register/teacher/?err=${error}`)
    })
    
})


module.exports = router