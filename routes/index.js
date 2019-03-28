const router = require('express').Router()
const {Teacher} = require('../models')

router.get('/',(req,res) => {
    Teacher.findAll({
        order: [['rating','DESC']]
    })
    .then((teachers)=> {
        // res.send(teachers)
        res.render('home', {teachers})
    })
    .catch((err)=> {
        res.send(err.message)
    })
})

module.exports = router