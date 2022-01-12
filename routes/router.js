const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.route('/') 
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
})


module.exports = router;