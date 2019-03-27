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
    }
})

module.exports = router