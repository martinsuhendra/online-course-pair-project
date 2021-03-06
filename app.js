const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const home = require('./routes')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const loginSession = require('./middlewares/session')
const session = require('express-session')
const logoutRoutes = require('./routes/logout')
const sessionRoutes = require('./routes/session')
const dashboardRoutes = require('./routes/dashboard')
const searchRoutes = require('./routes/search')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extends: true}))
app.use(express.static(__dirname + '/public'))
app.use("*/css",express.static("public/css"));
app.use('*/js',express.static("public/js"));
app.use("*/images",express.static("public/images"))
//----SESSION INIT------------
app.use(session({
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,

}));

app.use(loginSession)
//----------------------------
app.use('/', home)
app.get('/cek',(req,res)=> {
    res.send(req.session)
})
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/logout',logoutRoutes)
app.use('/session',sessionRoutes) 
app.use('/dashboard', dashboardRoutes)
app.use('/search',searchRoutes)

app.listen(port, ()=> {
    console.log(`listening to port: ${port}`)
})