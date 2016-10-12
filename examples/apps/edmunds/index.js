'use strict';
module.change_code = 1;

var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('edmunds');
var DataHelper = require('./inc/data_helper');

var ModelOverview = require('./intents/modeloverview_intent');
var modeloverviewIntent = new ModelOverview();


//var Quote = require('./intents/quote_intent');
//var quoteIntent = new Quote();
//var GetMoreIntent = require('./intents/getmore_intent');
//var getmoreIntent = new GetMoreIntent();
//var HelpIntent = require('./intents/help_intent');
//var helpIntent = new HelpIntent();
//var StopIntent = require('./intents/stop_intent');
//var stopIntent = new StopIntent();

//app.launch(require('./inc/launch_event'));

app.intent('ModelOverviewIntent', modeloverviewIntent.slots_and_utterances(), function (req, res) {return modeloverviewIntent.callback(req, res)});

//app.intent('QuoteIntent', quoteIntent.slots_and_utterances(), function (req, res) {quoteIntent.callback(req, res)});
//app.intent('AMAZON.RepeatIntent', getmoreIntent.slots_and_utterances(), function (req, res) {getmoreIntent.callback(req, res)});
//app.intent('AMAZON.StopIntent', stopIntent.slots_and_utterances(), function (req, res) {stopIntent.callback(req, res)});
//app.intent('AMAZON.HelpIntent', helpIntent.slots_and_utterances(), function (req, res) {helpIntent.callback(req, res)});

//app.messages.NO_INTENT_FOUND = "Why did you call that intent? I don't know about that";

app.sessionEnded(function (req, res) {
    console.log('sessionEnded event');
    // Clean up the user's server-side stuff, if necessary
});

app.error = function (exception, req, res) {
    console.log(exception);
    throw exception;
};

module.exports = app;