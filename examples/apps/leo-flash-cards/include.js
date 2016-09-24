'use strict'
module.change_code = 1;

var app_var = [];
app_var.user_name = "Leo";
app_var.answer_count = 1;
app_var.game_length = 3;

var questions = [{
    'What color is a bananna?': ['yellow']
}, {
    'How many fingers does Leo have?': ['10']
}, {
    'Red means?': ['stop']
}, {
    'Green means?': ['go']
}, {
    'Baaloo is a?': ['bear']
}, {
    'Shaakeera is a?': ['lion']
}, {
    'Robin Hood is a?': ['fox']
}, {
    'What color is the sky?': ['blue']
}, {
    'What color is water?': ['blue']
}, {
    'What color is grass?': ['green']
}, {
    'What time does Papa get home from work?': ["5"]
}];
var strings = [];
strings.welcome_part1 = "I will ask ";
strings.welcome_part2 = " questions, try to get as many right as you can. Just say the answer. Let's begin. ";

module.exports.app_var = app_var; 
module.exports.questions = questions;
module.exports.strings = strings;