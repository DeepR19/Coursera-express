const express =require("express");
const http = require('http');
const port = 3000;

const app = express();

app.use((req, res, next) =>{
    console.log(req.headers);
    res.statusCode = 200;

});
const server= http.createServer((req, res)=>{
    console.log("Server")
});

server.listen(port, ()=>{
    console.log("Srtver is started on ", port);

})