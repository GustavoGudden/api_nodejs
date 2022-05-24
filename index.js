//const express = require("express");
//const { Person } = require("./person");
//const person = new Person("gustavo");
//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

const dotenv = require("dotenv");
const connectdb = require("./src/database/connect");
dotenv.config();

connectdb();

require("./modules/express");
