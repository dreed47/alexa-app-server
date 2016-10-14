'use strict';
module.change_code = 1;
var _ = require('lodash')

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
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
        console.log(key + ". ");
        res.say(key + ". ");
    });
    res.say("Say the name of a story.  ").shouldEndSession(false, "If you would like to continue, say a name of a story. You can also say list available stories.");
    return;
}
module.exports = Intent