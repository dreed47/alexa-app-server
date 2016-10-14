'use strict';
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'STORY': 'STORY_LIST'
        },
        "utterances": ["{-|STORY} ", "{get|tell|say|read} {me|us|everyone|all of us} {a|the} {story|fable|tale|} {about|for|on|} {-|STORY} {story|fable|tale|}"]
    };
    return slots_and_utterances;
}

// Callback for the Answer Intent
Intent.prototype.callback = function (req, res) {
    console.log('storyintent');
    console.log(req.slot('STORY'));
    var Story = require('./story_process');
    var story = new Story();

    story.process(req, res);

}
module.exports = Intent