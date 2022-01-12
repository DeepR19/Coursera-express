const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)=>{
    res.end('Done! in the server...');
})
.post( (req, res)=>{
    res.end("Post name: "+req.body.name);
})
.put( (req, res)=>{
    res.statusCode = 403;
    res.end("PUT: Done");
})
.delete( (req, res)=>{
    res.end('Delete: Done');
});

dishRouter.route('/:parameter') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)=>{
    res.end('you select the dish of Id: '+req.params.parameter);
})
.post( (req, res)=>{
    res.statusCode = 403;
    res.end('POST operation is not allowed...');
})
.put( (req, res)=>{
    res.end(`You update a dish of dishID: ${req.body.id}\n
            Description: ${req.body.description}`);
})
.delete( (req, res)=>{
    res.end("Delete the dish: "+req.params.parameter);
});

module.exports = dishRouter;