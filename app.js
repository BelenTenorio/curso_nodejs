const express = require('express');
require("dotenv").config();
const Server = require("./server");

const app = express();
const server = new Server();

app.get('/', function (req, res) { res.send('Hola Julio'); });

app.listen(3000); 
server.listen();