/**
 * Created by teodor on 09/08/17.
 */
var express = require('express')
var compression = require('compression')
var path = require('path')

import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './src/routes'

var app = express()
app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        // in here we can make some decisions all at once
        if (err) {
            // there was an error somewhere during route matching
            res.status(500).send(err.message)
        } else if (redirect) {
            // we haven't talked about `onEnter` hooks on routes, but before a
            // route is entered, it can redirect. Here we handle on the server.
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // if we got props then we matched a route and can render
            const appHtml = renderToString(<RouterContext {...props}/>)
            res.send(renderPage(appHtml))
        } else {
            // no errors, no redirect, we just didn't match anything
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <head>
    <!--<base href="/" />-->
    <title>Scotch Cars</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Stylesheet-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <link rel="stylesheet" href="public/style.css">
    </head>
    <body>
    <!--Container for React rendering-->
    <div id="container">${appHtml}</div>
    <!--Bundled file-->
    <script src="public/bundle.js"></script>
    </body>
    </html>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})