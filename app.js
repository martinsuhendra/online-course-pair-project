const express = require('express')
const app = express()
const port = 3000;
const home = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extends: true}))
app.use(express.static(__dirname + '/public'))
app.use("*/css",express.static("public/css"));
app.use('*/js',express.static("public/js"));
app.use("*/images",express.static("public/images"))


app.use('/', home)

app.listen(port, ()=> {
    console.log(`listening to port: ${port}`)
})