const express = require('express');
const controladorCarro = require('../controlllers/carro.controller');

const api = express.Router();

api.post("/addCarro",controladorCarro.AddCarro)

module.exports = api;