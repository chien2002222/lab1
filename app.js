const http = require("http")
const port = process.env.PORT || 3000;
const app = http.createServer((req,res)=>{
    res.statusCode = 200; //http_ok
    res.setHeader("Content-Type","Text/html")
    res.write("<h1> Nguoi nghien Pham Trung Kien</h1>")
    res.write('<img src = "https://toanthaydinh.com/wp-content/uploads/2020/04/anh-dep-hoa-huong-duong-va-mat-troi_022805970-1-1181x800-6.jpg" >')
    res.end("Hello world")
})
app.listen(port)