'use strict'
module.change_code = 1;

var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('leo-flash-cards');
var HelperFunctions = require('./helper_functions');

var AnswerIntent = require('./intents/answer_intent');
var answerIntent = new AnswerIntent();
var DontknowIntent = require('./intents/dontknow_intent');
var dontknowIntent = new DontknowIntent();
var StartOverIntent = require('./intents/dontknow_intent');
var startoverIntent = new StartOverIntent();


app.pre = require('./pre_event');

app.launch(require('./launch_event'));

app.intent('AnswerIntent', answerIntent.slots_and_utterances(), function(req, res) {answerIntent.callback(req, res)});
app.intent('DontKnowIntent', dontknowIntent.slots_and_utterances(), function(req, res) {dontknowIntent.callback(req, res)});
app.intent('StartOverIntent', startoverIntent.slots_and_utterances(), function(req, res) {startoverIntent.callback(req, res)});

app.messages.NO_INTENT_FOUND = "Why did you called that intent? I don't know about that";

app.error = function(exception, request, response) {
    console.log(exception);
    throw exception;
};

module.exports = app;