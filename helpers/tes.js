const ss = require('sentence-similarity')
const similarity = ss.sentenceSimilarity;
const similarityScore = ss.similarityScore;
let winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold: 0} }
let s1 = ['saya','suka','gitar','drum']
let s2 = ['pukul','senar','drum']


console.log(similarity(s1,s2,winkOpts).exact)
