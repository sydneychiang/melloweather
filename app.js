const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");
const path = require("path")

const app = express();
const port = process.env.PORT || 8080;

// Middleware

app.use(express.static(path.join(__dirname, 'melloweather/build')))

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(cookieParser());

app.use("/", router);  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/melloweather/build/index.html'))
})

app.listen(port, function() {
    console.log(`App running on port ${port}...`);
});