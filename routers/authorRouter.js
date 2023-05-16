const express = require("express")
const router = express.Router()

const { authorController } = require("./../controllers")

router.post("/register",authorController.authorCreate)
router.get("/",authorController.getAllAuthor)

module.exports = router