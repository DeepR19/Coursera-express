const bodyParser = require("body-parser");
const express =require("express");
const http = require('http');
const morgan = require('morgan');

const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionsRouter");
const leaderRouter = require("./routes/leaderRouter");

const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes to all pages
app.use('/dishes', dishRouter);
app.use('/promotion', promotionRouter);
app.use('/leader', leaderRouter);

// static folder of the project
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