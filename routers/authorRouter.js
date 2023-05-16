const express = require("express")
const router = express.Router()
const auth = require("./../middleware/auth")
const { authorController } = require("./../controllers")

router.post("/register",authorController.authorCreate)
router.get("/",auth.verifyToken, auth.checkRole,authorController.getAllAuthor)

module.exports = router