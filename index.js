var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var axios = require('axios');
var querystring = require('querystring');

require('dotenv').config();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
