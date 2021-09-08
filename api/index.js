const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3001;
const app = express();
const _ = require('lodash');
const wsModule = require('ws');
const {connection} = require('./connection');
const {routers} = require('./router');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.server = http.createServer(app);

app.wss = new wsModule.Server({server : app.server});
app.connections = new connection(app);
app.routers = routers(app);

// Start Server
app.server.listen(PORT, ()=>{
    console.log(`Server is running on: http:localhost:${PORT}`);
})
