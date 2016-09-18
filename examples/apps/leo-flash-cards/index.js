var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('leo-flash-cards');
app.include = require('./include.js');
app.user_name = 'Leo';
app.answer_count = 1;
app.game_length = 3;

app.launch(function(req, res) {
    res.session('somesessiondata', 'islistedhere');
    res.say(this.include.strings.welcome_part1 + this.user_name + ' ');
    res.say(this.game_length.toString() + ' ' + this.include.strings.welcome_part2);
});

app.intent('AnswerIntent', {
    'slots': {
        'ANSWER': 'LIST_OF_ANSWERS'
    },
    "utterances": ["{|the answer is|my answer is|is it} {-|ANSWER}", "{-|ANSWER} is my answer"]
}, function(req, res) {
    res.say('Your name is ' + req.slot('NAME') + ' and you are ' + req.slot('AGE') + ' years old');
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


app.messages.NO_INTENT_FOUND = "Why you called dat intent? I don't know bout dat";

app.error = function(exception, req, res) {
    res.say("Sorry, something bad happened");
};

module.exports = app;