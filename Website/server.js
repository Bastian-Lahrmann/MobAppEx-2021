
//based on node.js express framework (uncomplete version since this pwa has to run on https,could not be implemented yet)
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(8080, () =>{
    console.log('Your application is on http://localhost:8080');
});