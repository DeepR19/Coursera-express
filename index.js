const bodyParser = require("body-parser");
const express =require("express");
const http = require('http');
const morgan = require('morgan');

const router = require("./routes/router");

const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', router);

// First this code will execute

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