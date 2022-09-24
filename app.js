const http = require("http")
const port = process.env.PORT || 3000;
const app = http.createServer((req,res)=>{
    res.statusCode = 200; //http_ok
    res.setHeader("Content-Type","Text/html")
    res.end("Hello world")
})
app.listen(port)