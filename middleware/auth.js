const jwt = require('jsonwebtoken')

module.exports = {
    checkRole:(req, res, next) => {
        console.log("role jalan loh")
        next()
    },
    verifyToken:(req, res, next) => {
        let token = req.headers.authorization 
    
        if(!token) { 
            return res.status(401).send({
                success:false,
                message:"unauthorize",
                data:null
            })
        }
    
        try { 
    
            token = token.split(" ")[1]
    
            if(token === null || !token) { 
                return res.status(401).send({
                    success:false,
                    message:"unauthorize",
                    data:null
                })
            }
    
            let verifyUser = jwt.verify(token, "coding-is-easy")
    
            if(!verifyUser) { 
                return res.status(401).send({
                    success:false,
                    message:"unauthorize",
                    data:null
                })
            }
    
            req.user = verifyUser
            next()
    
        } catch (err) { 
            return res.status(500).send({
                success:false,
                message:err.message,
                data:null
            })
        }
    } 
}