'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
    "utterances": ["{i don't know|don't know|skip|i don't know that|who knows|i don't know this question|i don't know that one|dunno}"]
};   
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    var Answer = require('./answer_process');
    var answer = new Answer();

    answer.process('dontknow', req, res);

    console.log('dontknowintent');

}
module.exports = Intent