'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'STARTOVER': 'STARTOVER_COMMANDS'
        },
        "utterances": ["{-|STARTOVER}"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    console.log('startoverintent');

    console.log(req.slot('PERSON'));
    console.log(req.slot('FACT_TYPE'));
    var Fact = require('./quote_process');
    var fact = new Fact();

    fact.process('fact', req, res);

}
module.exports = Intent