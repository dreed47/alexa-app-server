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
    res.session('story', null);
    res.say("You can use this skill by saying something like. Tell me the 3 little pigs story from Leo's Stories. Or, read me the princess and the pea fable from Leo's Stories. If you would like to continue, say the name of a story.  You can also say list available stories.").shouldEndSession(false, "If you would like to continue, say a name of a story. You can also say list available stories.");
    
    return;
}
module.exports = Intent