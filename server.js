const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.use(express.static('bday message'));

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send('hello');
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);