const { authController } = require("./../controllers")

const express = require("express")
const router = express.Router()

router.post("/register", authController.authRegister)
router.post("/login",authController.authLogin)

module.exports = router