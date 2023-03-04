const Todo = require("./structure");
const mongoose = require("mongoose");
const url = require("../config/databaseConfig");

const db = {};
db.url = url;
db.mongoose = mongoose;
db.Todo = Todo(mongoose);
module.exports = db;
