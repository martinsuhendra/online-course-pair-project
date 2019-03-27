const router = require('express').Router()
const {Student, Teacher} = require('../models')

router.get('/', (req, res)=> {
    res.render('login')
})

router.post('/', (req, res)=> {
    
    if (req.body.role == 'student') {
        Student.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((student)=> {
            if (!student.validatePassword(req.body.password)) {
                throw new Error(`username/password wrong`)
            }else {
                req.session.login = {
                    id: student.id,
                    email: student.email,
                    role: req.body.role
                }
                res.locals.login = req.session.login
            }
            res.redirect('/')
        })
        .catch((err)=> {
            res.send(err.message)
        })
    } else {
        Teacher.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((teacher)=> {
            if (!teacher.validatePassword(req.body.password)) {
                throw new Error(`username/password wrong`)
            }else {
                req.session.login = {
                    id: teacher.id,
                    email: teacher.email,
                    role: req.body.role
                }
                res.locals.login = req.session.login
            }
            res.redirect('/')
        })
        .catch((err)=> {
            res.send(err.message)
        })
    }
})

module.exports = router