const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.status(200).send("<h1 align=\"center\">Welcome to GitHub ORG Stats API.</h1>")
})

module.exports = app;