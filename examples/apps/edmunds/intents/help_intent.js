'use strict';
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {},
        "utterances": ["{help|can you help me|I would like help|I would like some help}"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    console.log('helpevent');
    res.session('person', null);
    res.say("You can use this skill by saying something like. Tell me an interesting quote about Bill from Interesting man. Or, get us a manly fact about James from Intersting Man. If you would like to continue, say a name.").shouldEndSession(false, "If you would like to continue, say a name.");
    
    return;
}
module.exports = Intent