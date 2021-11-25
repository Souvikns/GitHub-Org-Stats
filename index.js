const express = require('express');
const {JSDOM} = require('jsdom');
const d3 = require('d3');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send("<h1 align=\"center\">Welcome to GitHub ORG Stats API.</h1>")
})

app.get('/dashboard', (req, res) => {
    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    let body = d3.select(dom.window.document.querySelector("body"))
    let svg = body.append('svg')
        .attr('width', 100)
        .attr('height', 100)
        .attr('xmlns', 'http://www.w3.org/2000/svg');

    svg.append("rect")
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 80)
        .attr('height', 80)
        .style('fill', 'orange')

    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(body.html())
});

module.exports = app