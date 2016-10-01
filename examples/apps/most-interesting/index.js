'use strict'
module.change_code = 1;
console.log('index.js');

var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('most-interesting');

var Quote = require('./intents/quote_intent');
var quoteIntent = new Quote();
var StartOverIntent = require('./intents/startover_intent');
var startoverIntent = new StartOverIntent();

//app.pre = require('./pre_event');

app.launch(require('./inc/launch_event'));

app.intent('QuoteIntent', quoteIntent.slots_and_utterances(), function (req, res) {quoteIntent.callback(req, res)});
app.intent('StartOverIntent', startoverIntent.slots_and_utterances(), function (req, res) {startoverIntent.callback(req, res)});

app.messages.NO_INTENT_FOUND = "Why did you call that intent? I don't know about that";

app.sessionEnded(function (req, res) {
    console.log('sessionEnded event');
    // Clean up the user's server-side stuff, if necessary
});

app.error = function (exception, request, response) {
    console.log(exception);
    throw exception;
};

module.exports = app;