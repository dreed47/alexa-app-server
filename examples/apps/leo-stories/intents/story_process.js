'use strict';
module.change_code = 1;
var _ = require('lodash')

function Story() {}

Story.prototype.process = function (req, res) {
    console.log('storyprocess');
    
    this.inc = require('../inc/include');
    var stories = this.inc.stories;

    //var story = req.session('story') ? (req.session('story') != 'nothing') : req.slot('STORY');
    //var story_list = req.session('stories_list') ? (req.session('stories_list') != 'nothing') : stories;
    var story = req.slot('STORY');
    var story_list = stories;
 
    console.log('STORY= ' + story);

    var tellStory = story_list[story];

    res.say(tellStory);

    //res.session('story', story);
    //res.session('stories_list', story_list);
    console.log("say = " + tellStory);

}

module.exports = Story