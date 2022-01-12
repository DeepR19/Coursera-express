const bodyParser = require("body-parser");
const express =require("express");
const http = require('http');
const morgan = require('morgan');

const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


// First this code will execute
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res)=>{
    res.end('Done! in the server...');
})
app.post('/dishes', (req, res)=>{
    res.end("Post name: "+req.body.name);
})
app.put('/dishes', (req, res)=>{
    res.statusCode = 403;
    res.end("PUT: Done");
})
app.delete('/dishes', (req, res)=>{
    res.end('Delete: Done');
})

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
    
});

const server= http.createServer(app);

server.listen(port, ()=>{
    console.log("Srtver is started on ", port);

})