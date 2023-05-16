const db = require('./../models')
// const Author = db.author

const authorCreate = async (req, res) => {
    try { 

        const { username , name, email, password, birthdate, biography } = req.body

        const result = await db.author.create({ 
            username:username, 
            name:name, 
            email:email, 
            password:password,
            birthdate:birthdate,
            biography:biography
        })

        if(result) { 
            res.status(200).send({
                success:true,
                message:"author created",
                data:result
            })
        } else { 
            res.status(400).send({
                success:false,
                message:"author create failed",
                data:null
            })
        }

    } catch ( err) { 
        res.status(500).send({
            success:false,
            message:err.message,
            data:null
        })
    }
}

const getAllAuthor = async (req, res ) => {
    try { 

        const result = await db.author.findAll({
            include:[db.book]
        })

        if(result) { 
            res.status(200).send({
                success:true, 
                message:"author fetchs",
                data:result 
            })
        } else { 
            res.status(400).send({
                success:true, 
                message:"author failed",
                data:result 
            })
        }

    } catch (err) { 
        res.status(500).send({
            success:false,
            message:err.message,
            data:null
        })
    }
}

module.exports = { 
    authorCreate,
    getAllAuthor
}