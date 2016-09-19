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
    var questions = populateGameQuestions(this);
    res.session('questions', questions);
    question_to_ask = Object.keys(app.include.questions[questions[0]]).toString();
    res.session('last_question_asked_id', questions[0]);
    res.session('last_question_asked_num', 0);
    res.session('last_question_asked', question_to_ask);
    
    res.say(question_to_ask);

    console.log(question_to_ask);
    
    var ttfgfgt = '';
});

app.intent('AnswerIntent', {
    'slots': {
        'ANSWER': 'LIST_OF_ANSWERS'
    },
    "utterances": ["{|the answer is|my answer is|is it} {-|ANSWER}", "{-|ANSWER} is my answer"]
}, function(req, res) {
    console.log(req.session('last_question_asked'));
    res.say('Your answer is ' + req.slot('ANSWER'));
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

function populateGameQuestions(app) {
    var gameQuestions = [];
    var indexList = [];
    var index = app.include.questions.length;

    if (app.game_length > index) {
        throw 'Invalid Game Length.';
    }

    for (var i = 0; i < app.include.questions.length; i++) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < app.game_length; j++) {
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

module.exports = app;