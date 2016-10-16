'use strict';
module.change_code = 1;
this.inc = require('./include');
var app_var = this.inc.app_var;

function Launch(req, res) {
    console.log('launchevent');
    //res.session('story', 'nothing');
    //res.session('stories_list', 'nothing')
    res.say(app_var.help_msg).shouldEndSession(false, app_var.reprompt_msg);
}

module.exports = Launch