'use strict';
module.change_code = 1;

function Launch(req, res) {
    console.log('launchevent');
    //res.say("You can use this skill by saying something like. Tell me an interesting quote about Bill from Interesting man. Or, get us a manly fact about James from Intersting Man. If you would like to continue, say a name.").shouldEndSession(false, "If you would like to continue, say a name.");

}

module.exports = Launch