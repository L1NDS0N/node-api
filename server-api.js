const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models");

// Rotas
//  Algum problema por aqui
app.use("/dashboard", require("./src/routes"));

app.listen(3001);
