const db = require("./../models")
const Book = db.book 

const createBook = async (req, res) => {
    try {
        const { title, release_date, author_id } = req.body 

        const result = await Book.create({
            title:title,
            release_date:release_date,
            author_id:author_id
        })

        if(result) { 
            res.status(200).send({
                success:true, 
                message:"book created",
                data:result
            })
        } else { 
            res.status(400).send({
                success:true, 
                message:"book create failed",
                data:null
            })
        }

    } catch (err) { 
        res.status(500).send({
            success:true, 
            message:err.message,
            data:null
        })
    }
}

module.exports = { 
    createBook
}