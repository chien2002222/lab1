const http = require("http")
const port = process.env.PORT || 3000;
const app = http.createServer((req,res)=>{
    res.statusCode = 200; //http_ok
    res.setHeader("Content-Type","Text/html")
    res.write("<h1> Nguoi nghien Pham Trung Kien</h1>")
    res.write('<img src = "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/307738655_1186529315261022_3602670144174905771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2ufaVFvJ8GIAX9Vqgqk&_nc_ht=scontent.fhan4-1.fna&oh=03_AVL6Rbn1dEbO6r-aW1d09T0PiteVQMYTcoz03itJivRr9Q&oe=63534A54">')
    res.end("Hello world")
})
app.listen(port)