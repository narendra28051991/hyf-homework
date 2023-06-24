const knex = require("knex");
const knexFile = require("../knexfile.js");
require("dotenv").config();

const environment = process.env.NODE_ENV;

module.exports = knex(knexFile[environment]);