const express = require("express")
const app = express()

app.use("/", express.static(__dirname + "/public"))

app.use((req,res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Siggaard & Hansen Technology</title>
        </head>
        <body>
            <center>
                <img style="margin: 32px 0 24px 0" src="/logo.png" width="300px"/>
                <p>siden er under ombygning</p>
            </center>
        </body>
        </html>
    `)
})

app.listen(80)