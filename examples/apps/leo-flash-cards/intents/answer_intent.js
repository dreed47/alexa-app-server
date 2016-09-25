'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'ANSWER': 'LIST_OF_ANSWERS'
        },
        "utterances": ["{|the answer is|my answer is|is it} {-|ANSWER}", "{-|ANSWER} is my answer"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {

    var Answer = require('./answer_process');
    var answer = new Answer();

    answer.process('answer', req, res);

}
module.exports = Intent