'use strict';
module.change_code = 1;

function Launch(req, res) {
    console.log('launchevent');
    //res.session('story', 'nothing');
    //res.session('stories_list', 'nothing')
    res.say("You can use this skill by saying something like. Tell me the 3 little pigs story from Leo's Stories. Or, read me the princess and the pea fable from Leo's Stories. If you would like to continue, say the name of a story.  You can also say list available stories.").shouldEndSession(false, "If you would like to continue, say a name of a story. You can also say list available stories.");
}

module.exports = Launch