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
    let error = []
    if (req.query.err) {
        error.push(req.query.err)
    }
    Teacher
        .findByPk(req.params.id)
        .then((teacher)=> {
            // res.send(teacher)
            res.render('session-book',{teacher, error})
        })
        .catch((err)=> {
            res.send(err)
        })
})

router.post('/:id', (req, res)=> {
    // res.send(typeof(new Date(req.body.date)))
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
            let error = err.errors.map(el=> el.message)
            res.redirect(`/session/${req.params.id}?err=${error}`)
        })
})


module.exports = router