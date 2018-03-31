const express = require("express")
const app = express()

app.use("/", express.static(__dirname + "/public"))

app.use((req,res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.end(`
        <center>
            <img style="margin: 32px 0 24px 0" src="/logo.png" width="300px"/>
            <p>siden er under ombygning</p>
        </center>
    `)
})

app.listen(80)