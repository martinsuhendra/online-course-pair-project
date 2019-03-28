const router = require('express').Router()
const {Student, Teacher, TeacherStudent}  = require('../models')
const  getFullName = require('../helpers/getFullName')
const getDate = require('../helpers/getDate')

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
            res.render('dashboard-student',{schedules, getFullName, getDate})
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
            res.render('dashboard-teacher',{schedules, getFullName,getDate})
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
            res.redirect('/')
        })
        .catch((err)=> {
            res.send(err)
        })
    })
})

router.post('/:id/give-rate', (req, res) => {
    // res.send(typeof(req.body.rating))
    TeacherStudent.findByPk(req.params.id)
        .then(schedule => {
            return schedule.update({
                teacherRating: true
            }, {
                rating: Number(req.body.rating)
            })
        })
        .then(() => {
            res.redirect('/dashboard')
        })
        .catch(err => {
            res.send(err.message)
        })
    // TeacherStudent.update({
    //     teacherRating: true
    // }, {
    //     where: {
    //         id: req.params.id
    //     }
    // })
    //     .then(() => {
    //         res.redirect('/dashboard')
    //     })
    //     .catch(err => {
    //         res.send(err.message)
    //     })
})


module.exports = router