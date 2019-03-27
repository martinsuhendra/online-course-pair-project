const router = require('express').Router()
const {Student, Teacher, TeacherStudent}  = require('../models')
const  getDate = require('../helpers/getDate')

router.get('/', (req, res)=> {
    // res.send(req.session)
    if (req.session.login.role == 'student') {
        TeacherStudent.findAll({
            where: {
                StudentId : req.session.login.id,
            },
            include: [{
                model: Teacher
            }]
        })
        .then((schedules)=>{
            res.render('dashboard-student',{schedules, getDate})
        })
        .catch((err)=> {
            res.send(err.message)
        })
    } else {
        TeacherStudent.findAll({
            where: {
                TeacherId : req.session.login.id
            },
            include:[{
                model:Student
            }]
        })
        .then((schedules)=> {
            // res.send(schedules)
            res.render('dashboard-teacher',{schedules})
        })
    }

    router.post('/:id/update-status',(req,res)=> {
        // res.send(req.body)
        TeacherStudent.update({
            status : req.body.status
        },{
            where: {
                id : req.params.id
            }
        })
        .then(()=> {
            // res.send(data)
            res.redirect(`/`)
        })
        .catch((err)=> {
            res.send(err)
        })
    })
})


module.exports = router