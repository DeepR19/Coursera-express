const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// routes for normal API
leaderRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req, res) =>{
    res.end("you are in leader page");
})
.post((req, res) =>{
    res.end("you add leader: "+req.body.name);
})
.put((req, res)=>{
    res.statusCode = 403;
    res.end("PUT is not allowed...");
})
.delete((req,res)=>{
    res.end("You are in Delete Page...")
});


// routes for params API
leaderRouter.route('/:address')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req, res) =>{
    res.end("You get leader of: "+req.params.address);
})
.post((req, res) =>{
    res.end('POST is not allowed...');
})
.put((req, res)=>{
    res.statusCode = 403;
    res.end("You update of leader: "+req.body.name+'\n'+
            'Description: '+req.body.description);
})
.delete((req,res)=>{
    res.end('You delete: '+req.params.address);
});

module.exports = leaderRouter;