const express = require("express");
const app = express()
const port = 3456
const { authorRouter, bookRouter, authRouter } = require("./routers")

app.use(express.json())

app.get("/",(req, res) => {
    res.send({
        success:true,
        message:"Author Book Collections API",
        data:null
    })
})

app.use("/author",authorRouter)
app.use("/book",bookRouter)
app.use("/auth",authRouter)

app.listen(port, () => {
    console.log("server run on port ", port)
})