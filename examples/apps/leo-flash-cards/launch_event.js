'use strict'
module.change_code = 1;

function Launch(req, res) {
    var HelperFunctions = require('./helper_functions');
    this.inc = require('./include');

    res.say(this.inc.strings.welcome_part1 + this.inc.app_var.user_name + ' ');
    res.say(this.inc.app_var.game_length.toString() + ' ' + this.inc.strings.welcome_part2);

    // set session object
    res.session('game_length', this.inc.app_var.game_length);
    var helperFunctions = new HelperFunctions();
    var questions = helperFunctions.populateGameQuestions(req, res);
    
    res.session('questions', questions);
    var question_to_ask = Object.keys(this.inc.questions[questions[0]]).toString();
    res.session('last_question_asked_id', questions[0]);
    res.session('last_question_asked_num', 0);
    res.session('failed_retries', 0);
    res.session('last_question_asked', question_to_ask);
    res.session('answered_correctly', 0);
    
    res.say(question_to_ask);

    console.log(question_to_ask);

}

module.exports = Launch