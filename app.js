const fs = require("fs");
const http = require("http")
const port = process.env.PORT || 3000;
const app = http.createServer((req,res)=>{
    res.statusCode = 200; //http_ok
    res.setHeader("Content-Type","Text/html")
    if(req.url === "/"){
        fs.readFile("./index.html", (err,data)=>{
            if(err){
                console.error(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else if(req.url === "/greenwich"){
        fs.readFile("./greenwich.html", (err,data)=>{
            if(err){
                console.error(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else{
        res.end("<h1>Page not found</h1>")
    }
    
})
app.listen(port)