'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
    "utterances": ["{start game|new game|start|start new game|restart}"]
};   
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    this.inc = require('../include');
    var HelperFunctions = require('../helper_functions');
    //console.log('startover');
    res.say('startover...');

}
module.exports = Intent