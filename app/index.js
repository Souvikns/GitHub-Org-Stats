const app = require('express')()


app.get('/', (req,res) => {
    return res.send("Welcome to GitHub Org Stats API");
})

module.exports = app;