'use strict';
module.change_code = 1;
this.inc = require('../inc/include');
var app_var = this.inc.app_var;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    var slots_and_utterances = {
        'slots': {},
        "utterances": ["{help|can you help me|I would like help|I would like some help}"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {

    console.log('helpevent');
    res.session('story', null);
    res.say(app_var.help_msg).shouldEndSession(false, app_var.reprompt_msg);
    
    return;
}
module.exports = Intent