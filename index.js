/**
 * Created by inftek on 27/03/17.
 */

"use strict"; /* usar o js com a  melhor performace*/
var express = require('express'); /* Framework do node.js */
var http = require('http'); /*server*/
var app = express();/* Framework do node.js */
var mustachExpress = require('mustache-express'); /* Framework do node.js */

// middlewares
app.engine('mustache', mustachExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));

// Application Routes
var routes = require('./routes')
routes.set(app);

app.listen(3000, function(){
    console.log('http://localhost:3000');
});
