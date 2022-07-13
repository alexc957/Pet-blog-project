"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var path_1 = __importDefault(require("path"));
// const express = require("express");
var app = (0, express_1["default"])();
var port = 8080; // default port to listen
app.set("views", path_1["default"].join(__dirname, "views"));
app.set("view engine", "ejs");
var prisma = new client_1.PrismaClient();
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.render("index.ejs");
});
// start the Express server
app.listen(port, function () {
    console.info("server started at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map