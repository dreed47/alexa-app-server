'use strict';
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    var slots_and_utterances = {
        'slots': {
            'STORY': 'STORY_LIST'
        },
        "utterances": ["{-|STORY} ", "{get|tell|say|read} {me|us|everyone|all of us} {a|the} {story|fable|tale|} {about|for|on|of|} {-|STORY} {story|fable|tale|}"]
    };
    return slots_and_utterances;
}

// Callback for the Story Intent
Intent.prototype.callback = function (req, res) {
    console.log('storyintent');
    console.log(req.slot('STORY'));
    var Story = require('./story_process');
    var story = new Story();

    story.process(req, res);

}
module.exports = Intent