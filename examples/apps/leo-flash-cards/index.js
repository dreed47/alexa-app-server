'use strict'

var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('leo-flash-cards');
var HelperFunctions = require('./helper_functions');
var Launch = require('./launch_event');

app.pre = function(req,res,type) {
    app.inc = require('./include');
};

app.launch(function(req, res) {
    var launch = new Launch();
    launch.start(req, res);
});


app.intent('AnswerIntent', {
    'slots': {
        'ANSWER': 'LIST_OF_ANSWERS'
    },
    "utterances": ["{|the answer is|my answer is|is it} {-|ANSWER}", "{-|ANSWER} is my answer"]
}, function(req, res) {
    console.log(req.session('last_question_asked'));
    var slot = req.slot;

    var helperFunctions = new HelperFunctions();
    var questions = helperFunctions.populateGameQuestions(req, res);

    //var questions = populateGameQuestions(req, res);
    var answers = app.inc.questions;
    var correctAnswerText =  answers[req.session('last_question_asked_id')][Object.keys(answers[req.session('last_question_asked_id')])[0]][0];

    var dcorrectAnswerText =  answers[req.session('last_question_asked_id')][Object.keys(answers[req.session('last_question_asked_id')])[0]];

    res.say('Your answer is ' + req.slot('ANSWER'));
    res.say('The correct answer is ' + correctAnswerText);
    if (req.slot('ANSWER') == correctAnswerText) {
        res.say('you are correct!!!!');
    } else {
       res.say('. Sorry, you are incorrect! Try again!');
    }

    // check your answer
});

app.intent('DontKnowIntent', {
    "utterances": ["{i don't know|don't know|skip|i don't know that|who knows|i don't know this question|i don't know that one|dunno}"]
}, function(req, res) {
    res.say('Your name is ' + req.slot('NAME') + ' and you are ' + req.slot('AGE') + ' years old');
});

app.intent('AMAZON.StartOverIntent', {
    "utterances": ["{start game|new game|start|start new game|restart}"]
}, function(req, res) {
    res.say('Your name is ' + req.slot('NAME') + ' and you are ' + req.slot('AGE') + ' years old');
});

app.messages.NO_INTENT_FOUND = "Why did you called that intent? I don't know about that";

app.error = function(exception, req, res) {
    res.say("Sorry, something really bad happened");
};

app.error = function(exception, request, response) {
    console.log(exception);
    throw exception;
};

module.exports = app;