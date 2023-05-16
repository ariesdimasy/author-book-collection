const express = require("express")
const router = express.Router()

const { bookController }  =  require("./../controllers")
const book = require("../models/book")

router.post("/",bookController.createBook)

module.exports = router

