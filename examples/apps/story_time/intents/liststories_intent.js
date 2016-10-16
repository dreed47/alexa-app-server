'use strict';
module.change_code = 1;
var _ = require('lodash')
this.inc = require('../inc/include');
var app_var = this.inc.app_var;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {
    
    var slots_and_utterances = {
        'slots': {},
        "utterances": ["{list|read|say} {available|list of|} stories"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    console.log('liststoriesintent');
    this.inc = require('../inc/include');
    var stories = this.inc.stories;

    _.forIn(stories, function(value, key) {
        console.log(key);
        res.say(key + ". ");
    });
    res.say("Say the name of a story.  ").shouldEndSession(false, app_var.reprompt_msg);
    return;
}
module.exports = Intent