'use strict'

function Launch() {}
var HelperFunctions = require('./helper_functions');

Launch.prototype.start = function (req, res) {
    var app = [];
    app.inc = require('./include');

    res.say(app.inc.strings.welcome_part1 + app.inc.app_var.user_name + ' ');
    res.say(app.inc.app_var.game_length.toString() + ' ' + app.inc.strings.welcome_part2);

    // set session object
    res.session('game_length', app.inc.app_var.game_length);
    var helperFunctions = new HelperFunctions();
    var questions = helperFunctions.populateGameQuestions(req, res);
    
    //var questions = populateGameQuestions(req, res);
    res.session('questions', questions);
    var question_to_ask = Object.keys(app.inc.questions[questions[0]]).toString();
    res.session('last_question_asked_id', questions[0]);
    res.session('last_question_asked_num', 0);
    res.session('last_question_asked', question_to_ask);
    res.session('answered_correctly', 0);
    
    res.say(question_to_ask);

    console.log(question_to_ask);
    
    var buggy3434 = '';

}

module.exports = Launch