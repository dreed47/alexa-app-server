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
    this.inc = require('../include');
    var HelperFunctions = require('../helper_functions');
    res.say('Your name is  years old');
    //console.log('dontknowintent');

}
module.exports = Intent