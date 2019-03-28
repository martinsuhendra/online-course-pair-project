const loginSession = (req,res,next)=> {
    if (!req.session.login) {
        res.locals.login = null
    } else {
        res.locals.login = req.session.login
    }
    next()
}

module.exports = loginSession