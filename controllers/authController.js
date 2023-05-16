const { Op } = require("sequelize")
const db = require("./../models")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Author = db.author

const authLogin = async (req, res) => {
    try { 

        const { email, password } = req.body

        const result = await Author.findOne({
            where:{
                
                email:email ,
                
            }
           
        })

        const isAuthorExists = await bcrypt.compare(password, result?.password)

        if(!isAuthorExists) { 
            return res.status(404).send({
                success:false,
                message:"email or password are invalid 1",
                data:{}
            })
        }

        if(result?.email) { 

            let payload = { 
                id:result?.id, 
                is_admin:result?.is_admin
            }

            const token = jwt.sign(payload, 'coding-is-easy', { 
                expiresIn:'1h'
            })

            return res.status(200).send({
                success:true,
                message:"author successfully login",
                data:result,
                token:token
            })
        } else { 
            return res.status(404).send({
                success:false,
                message:"email or password are invalid 2",
                data:{}
            })
        }

    } catch(err) { 
        return res.status(500).send({
            success:false,
            message:err.message,
            data:null
        })
    }
}

const authRegister = async (req, res) => {
    try { 
       
        const { name, username, email, password, password_confirm } = req.body

        if(password != password_confirm ) { 
            return res.status(400).send({
                success:false,
                message:"password confirm must be same as password",
                data:null
            })
        }
        
        const isEmailExist = await Author.findOne({
            where:{
                email:email
            }
        })

        if(isEmailExist) { 
            return res.status(400).send({
                success:false,
                message:"email already exists",
                data:null
            })
        } else { 
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            const result = await Author.create({
                name,
                username,
                email,
                password:hashPassword
            })

            return res.status(200).send({
                success:true,
                message:"author successfully register",
                data:result
            })

        }
    } catch(err) { 
        return res.status(500).send({
            success:false,
            message:err.message,
            data:null
        })
    }
}

module.exports = {
    authLogin,
    authRegister
}