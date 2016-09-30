'use strict'
module.change_code = 1;

function Fact() {}

Fact.prototype.process = function (intent, req, res) {
    console.log('wikiinfoprocess');
    
    this.inc = require('../inc/include');
    var HelperFunctions = require('../inc/helper_functions');

    var slot = req.slot;

    var facts = this.inc.facts;

//    var correctAnswerText = answers[req.session('last_question_asked_id')][Object.keys(answers[req.session('last_question_asked_id')])[0]][0];



}

module.exports = Fact