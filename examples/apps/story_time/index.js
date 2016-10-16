'use strict';
module.change_code = 1;

var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('story-time');

var Story = require('./intents/story_intent');
var storyIntent = new Story();
var ListStoriesIntent = require('./intents/liststories_intent');
var listStoriesIntent = new ListStoriesIntent();
var HelpIntent = require('./intents/help_intent');
var helpIntent = new HelpIntent();
var StopIntent = require('./intents/stop_intent');
var stopIntent = new StopIntent();

app.launch(require('./inc/launch_event'));

app.intent('StoryIntent', storyIntent.slots_and_utterances(), function (req, res) {storyIntent.callback(req, res)});
app.intent('ListStoriesIntent', listStoriesIntent.slots_and_utterances(), function (req, res) {listStoriesIntent.callback(req, res)});
app.intent('AMAZON.StopIntent', stopIntent.slots_and_utterances(), function (req, res) {stopIntent.callback(req, res)});
app.intent('AMAZON.HelpIntent', helpIntent.slots_and_utterances(), function (req, res) {helpIntent.callback(req, res)});

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