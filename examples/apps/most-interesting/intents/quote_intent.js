'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'PERSON': 'person_list', 'FACT_TYPE': 'fact_type_list' 
        },
        "utterances": ["for a {-|FACT_TYPE} fact about {-|PERSON}"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {
    console.log('quoteintent');
    console.log(req.slot('PERSON'));
    console.log(req.slot('FACT_TYPE'));
    var Fact = require('./quote_process');
    var fact = new Fact();

    fact.process('fact', req, res);

}
module.exports = Intent