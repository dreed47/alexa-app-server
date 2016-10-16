'use strict';
module.change_code = 1;
var _ = require('lodash')

function Story() {}

Story.prototype.process = function (req, res) {
    console.log('storyprocess');
    
    this.inc = require('../inc/include');
    var stories = this.inc.stories;

    var story = req.slot('STORY');
    var story_list = stories;
 
    console.log('STORY= ' + story);

    var tellStory = story_list[story];
    
//    tellStory = _.replace(tellStory, /\|\|\|\|\|\|\|/g, "<break time='3500ms'/>")
//    tellStory = _.replace(tellStory, /\|\|\|\|\|\|/g, "<break time='3000ms'/>")
//    tellStory = _.replace(tellStory, /\|\|\|\|\|/g, "<break time='2500ms'/>")
//    tellStory = _.replace(tellStory, /\|\|\|\|/g, "<break time='2000ms'/>")
//    tellStory = _.replace(tellStory, /\|\|\|/g, "<break time='1500ms'/>")
//    tellStory = _.replace(tellStory, /\|\|/g, "<break time='1000ms'/>")
    tellStory = _.replace(tellStory, /\|/g, "<break time='500ms'/>")

    res.say(tellStory);

    console.log("say = " + tellStory);

}

module.exports = Story