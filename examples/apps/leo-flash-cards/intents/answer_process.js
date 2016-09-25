'use strict'
module.change_code = 1;

function Answer() {}

Answer.prototype.process = function (intent, req, res) {
    console.log('answerprocess');
    
    this.inc = require('../include');
    var HelperFunctions = require('../helper_functions');

    if (req.session('at_end_of_game') == true) {
        console.log(req.session('at_end_of_game'));
        return
    }

    console.log(req.session('last_question_asked'));
    var slot = req.slot;

    var questions = req.session('questions');

    var answers = this.inc.questions;
    var correctAnswerText = answers[req.session('last_question_asked_id')][Object.keys(answers[req.session('last_question_asked_id')])[0]][0];

    if (intent == 'answer' && req.slot('ANSWER') == correctAnswerText) {
        // The answered corrently
        var answered_correctly = req.session('answered_correctly') + 1;
        res.say('You are correct!');
        res.session('answered_correctly', answered_correctly);
        if (req.session('last_question_asked_num') >= (req.session('game_length') - 1)) {
            // They answered the last question so end game
            res.session('at_end_of_game', true);
            var congrates = answered_correctly > (req.session('game_length')/2) ? ' YOU ROCK!' : '';
            res.say("You've answered " + answered_correctly + ' out of ' + req.session('game_length') + ' questions correctly.' + congrates)
            res.say('Say play again to play another game or say quit at any time to end the game.')
            res.shouldEndSession(false);
        } else {
            // Ask another question
            res.session('failed_retries', 0);
            var next_question_num = req.session('last_question_asked_num') + 1;
            res.session('last_question_asked_num', next_question_num);
            var question_to_ask = Object.keys(this.inc.questions[questions[next_question_num]]).toString();
            res.session('last_question_asked_id', questions[next_question_num]);
            res.session('last_question_asked', question_to_ask);
            res.session('last_correct_answer', correctAnswerText);
            res.say(question_to_ask);
            res.shouldEndSession(false);
        }
    } else {
        // They answered incorrectly
        var answered_correctly = req.session('answered_correctly');
        res.say('Sorry, you are incorrect!');
        if (req.session('failed_retries') < 1) {
            // let them try to answer a second time
            res.say('Try again!');
            res.say(req.session('last_question_asked'));
            res.session('failed_retries', 1);
            res.shouldEndSession(false);
        } else if (req.session('last_question_asked_num') >= (req.session('game_length') - 1)) {
            // they failed to answer the question the second time and it was the last question so end game
            res.say('The correct answer is ' + correctAnswerText + '.');
            res.session('at_end_of_game', true);
            var congrates = answered_correctly > (req.session('game_length')/2) ? ' YOU ROCK!' : '';
            res.say("You've answered " + answered_correctly + ' out of ' + req.session('game_length') + ' questions correctly.' + congrates)
            res.say('Say play again to play another game or say quit at any time to end the game.')
            res.shouldEndSession(false);
        } else {
            // they failed to answer the question the second time so ask next question
            res.say('The correct answer is ' + correctAnswerText + '.');
            res.session('failed_retries', 0);
            var next_question_num = req.session('last_question_asked_num') + 1;
            res.session('last_question_asked_num', next_question_num);
            var question_to_ask = Object.keys(this.inc.questions[questions[next_question_num]]).toString();
            res.session('last_question_asked_id', questions[next_question_num]);
            res.session('last_question_asked', question_to_ask);
            res.session('last_correct_answer', correctAnswerText);
            res.say(question_to_ask);
            res.shouldEndSession(false);
        }
    }
}

module.exports = Answer