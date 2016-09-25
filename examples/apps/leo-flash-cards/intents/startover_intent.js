'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
    "utterances": ["{start game|new game|start|start new game|restart|play again|lets play again}"]
};   
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    this.inc = require('../include');
    var HelperFunctions = require('../helper_functions');

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
    res.shouldEndSession(false);

    console.log(question_to_ask);

}
module.exports = Intent