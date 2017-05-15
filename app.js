const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');
app.use(require('./src/routes'));


const server = app.listen(port, () => {
    console.log("App is up and running @ port: " + port);
});

module.exports = server;