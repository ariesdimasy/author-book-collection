const db = require("./../models")
const Author = db.author

const authLogin = () => {

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
            
            const result = await Author.create({
                name,
                username,
                email,
                password
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