'use strict';
module.change_code = 1;
var _ = require('lodash')

function Story() {}

Story.prototype.process = function (req, res) {
    console.log('storyprocess');
    
    this.inc = require('../inc/include');
    var app_var = this.inc.app_var;

    var stories = this.inc.stories;

    var story = req.slot('STORY');
    story = _.toLower(story);

    var story_list = stories;
    
    story = _.replace(story, /1/g, "one")
    story = _.replace(story, /2/g, "two")
    story = _.replace(story, /3/g, "three")
    story = _.replace(story, /4/g, "four")
    story = _.replace(story, /5/g, "five")
    
    console.log('STORY= ' + story);

    var tellStory = story_list[story];
    if (tellStory == undefined) {
        console.log("could not find story ");
        res.say(app_var.story_not_found_msg + app_var.reprompt_msg).shouldEndSession(false, app_var.reprompt_msg);
    }
    else {
        tellStory = _.replace(tellStory, /\|/g, "<break time='500ms'/>")
        res.say(tellStory);
        console.log("say = " + tellStory);

    }

}

module.exports = Story