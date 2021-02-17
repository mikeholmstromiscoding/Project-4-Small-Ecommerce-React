const jwt = require('jsonwebtoken')
const secretKey = 'mike'


exports.genToken = (id) => {
    return jwt.sign({id: id}, secretKey, {expiresIn: '1h'})
}


exports.checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        req.userData = jwt.verify(token, secretKey)
        next()
    }
    catch {
        return res(401).json({
            statusCode: 401, 
            status: false,
            message: 'Acess Restricted!, Please login'
        })
    }
}