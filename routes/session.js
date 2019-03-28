const router = require('express').Router()
const {Teacher, Student, TeacherStudent} = require('../models')
const sendMail = require('../helpers/getEmail')

router.get('/',(req, res)=> {
   
    Teacher
        .findAll()
        .then((teachers)=> {
            res.render('session-list',{teachers})
        })
        .catch((err)=> {
            res.send(err)
        })  
})

router.get('/:id',(req, res)=> {
    Teacher
        .findByPk(req.params.id)
        .then((teacher)=> {
            // res.send(teacher)
            res.render('session-book',{teacher})
        })
        .catch((err)=> {
            res.send(err)
        })
})

router.post('/:id', (req, res)=> {
    // res.send(req.body)
    let teacherData;
    TeacherStudent
        .create(
            { TeacherId : req.params.id,
              StudentId : req.session.login.id,
              date: req.body.date
            } 
        )
        .then(()=> {
            return Teacher.findByPk(req.params.id)
        })
        .then((teacher)=> {
            // res.send(teacher)
            teacherData = teacher
            return Student.findByPk(req.session.login.id)
        })
        .then((student)=> {
            let text = `Congratulation, ${teacherData.getFullName()}! You got one appoinment from our student ${student.getFullName()}!`
            sendMail(teacherData.email, text)
            res.redirect('/session')
        })
        .catch((err)=> {
            res.send(err.message)
        })
})


module.exports = router