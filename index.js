const http = require("http");
const fs = require("fs")

http.createServer((req,res)=>{
    res.write("this is good");
    res.end()
}).listen(4500)
