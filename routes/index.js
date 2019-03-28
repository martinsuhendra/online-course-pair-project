const router = require('express').Router()
const {Teacher} = require('../models')
const ss = require('sentence-similarity')
const similarity = ss.sentenceSimilarity;
const similarityScore = ss.similarityScore;
let winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold: 0} }

router.get('/',(req,res) => {
    Teacher.findAll({
        order: [['rating','DESC']],
        limit: 3
    })
    .then((teachers)=> {
        // res.send(teachers)
        res.render('home', {teachers})
    })
    .catch((err)=> {
        res.send(err.message)
    })
})

router.get('/search',(req,res)=> {

})

module.exports = router