"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const app = express();
const PORT = 3000;
// mongoose connection
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017", {
    useMongoClient: true,
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
crmRoutes_1.default(app);
// serving static files
app.use(express.static("public"));
app.get("/", (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
