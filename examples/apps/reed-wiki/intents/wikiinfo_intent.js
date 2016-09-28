'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'PERSON': 'person', 'FACT_TYPE': 'fact_type' 
        },
        "utterances": ["for a {-|FACT_TYPE} fact about {-|PERSON}", "for a {-|FACT_TYPE} fact about {person}", "for a {fact-type} fact about {-|PERSON}", "for a {fact-type} fact about {person}"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {
    console.log('reedwikiintent');
    console.log(req.slot('PERSON'));
    console.log(req.slot('FACT_TYPE'));
    //var Answer = require('./answer_process');
    //var answer = new Answer();

    //answer.process('answer', req, res);

}
module.exports = Intent