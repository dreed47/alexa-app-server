'use strict'
module.change_code = 1;

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {},
        "utterances": ["{stop|quite|end|cease|stop game|no more|no}"]
    };
    return slots_and_utterances;
}

Intent.prototype.callback = function (req, res) {
    return;
}
module.exports = Intent