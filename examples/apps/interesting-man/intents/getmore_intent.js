'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {},
        "utterances": ["{restart|play again|tell me more|hit me again|give me another one|more|next|another one|again}"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    console.log('getmoreintent');

    var Fact = require('./quote_process');
    var fact = new Fact();
    if (typeof req.session('person') !== "undefined") {
        fact.process(req, res);
    } else {
        res.say("I can't find a fact for that person.").shouldEndSession(true)
    }

}
module.exports = Intent