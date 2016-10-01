'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'PERSON': 'LITERAL', 'FACT_TYPE': 'LITERAL' 
        },
        "utterances": ["for a {fun|FACT_TYPE} fact about {alex|alyssa|aaron|emily|PERSON}", 
                       "for a {silly|FACT_TYPE} fact about {alex|alyssa|aaron|emily|PERSON}", 
                       "for a {embarrasing|FACT_TYPE} fact about {alex|alyssa|aaron|emily|PERSON}"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {
    console.log('reedwikiintent');
    console.log(req.slot('PERSON'));
    console.log(req.slot('FACT_TYPE'));
    var Fact = require('./wikiinfo_process');
    var fact = new Fact();

    fact.process('fact', req, res);

}
module.exports = Intent