'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'PERSON': 'AMAZON.US_FIRST_NAME' 
        },
        "utterances": [" {get|tell|say} {me|us|everyone|all of us} {some|a few|} {fun|silly|intersting|manly|} {info|facts|quotes|data} {about|for|on|} {-|PERSON}"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {
    console.log('quoteintent');
    console.log(req.slot('PERSON'));
    var Fact = require('./quote_process');
    var fact = new Fact();

    fact.process(req, res);

}
module.exports = Intent