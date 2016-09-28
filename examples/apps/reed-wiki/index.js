'use strict'
module.change_code = 1;
console.log('index.js');

var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('reed-wiki');
//app.dictionary = {"person":["alex","aaron","emily"], "fact-type":["fun","silly","scary"]};

//var HelperFunctions = require('./helper_functions');

var WikiInfoIntent = require('./intents/wikiinfo_intent');
var wikiinfoIntent = new WikiInfoIntent();

//app.pre = require('./pre_event');

app.launch(require('./launch_event'));

app.intent('WikiInfoIntent', wikiinfoIntent.slots_and_utterances(), function (req, res) {wikiinfoIntent.callback(req, res)});

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