const express = require("express")
const bodyParser = require("body-parser")
const app = express()


app.use("/", express.static(__dirname + "/public"))

app.use((req,res) => {
    res.sendFile(__dirname + "/index.html")
})

const fs = require("fs")
app.post("/message", bodyParser.json(), (req,res) => {
    const { mail, subject, message } = req.body
    fs.appendFileSync("/data/messages.txt", `
        mail: ${mail}
        subject: ${subject}
        message: ${message}
        \n\n
    `)
    res.end("OK")
})

app.listen(8080)