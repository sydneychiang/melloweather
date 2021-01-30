const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");

const app = express();
const port = 8080;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(cookieParser());


app.use("/", router);   

app.listen(port, function() {
    console.log(`App running on port ${port}...`);
});