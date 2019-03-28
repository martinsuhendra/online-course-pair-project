const router = require('express').Router()
const {Teacher, Student, TeacherStudent} = require('../models')
const sendMail = require('../helpers/getEmail')
const ss = require('sentence-similarity')
const similarity = ss.sentenceSimilarity;
const similarityScore = ss.similarityScore;
let winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold: 0} }
let s1 = ['saya','suka','gitar','drum']
let s2 = ['pukul','senar','drum']

router.post('/',(req,res)=> {
    Teacher.findAll()
    .then((teachers)=> {
        let arrSearch = req.body.tags.split(',')
        let result = []
        teachers.forEach(teacher => {
            let arrTags = teacher.tags.split(',')
            let objSimilar = similarity(arrSearch,arrTags,winkOpts).exact
            if (objSimilar > 0) {
                result.push(teacher)
            }
        });
        return result
    })
    .then((filtered)=> {
        res.render('search-list',{filtered})
    })
    .catch((err)=> {
        res.send(err.message)
    })
})

module.exports = router