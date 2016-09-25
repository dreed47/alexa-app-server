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
    'A red light means?': ['stop']
}, {
    'A green light means?': ['go']
}, {
    'Baaloo is a?': ['bear']
}, {
    'What kind of animal is Shaakeera?': ['lion']
}, {
    'What kind of animal is Robin Hood': ['fox']
}, {
    'What color is the sky?': ['blue']
}, {
    'What color is water?': ['blue']
}, {
    'What kind of animal is curious George?': ['monkey']
}, {
    'How many feet does Leo have?': ['2']
}, {
    'What kind of animals are on Paw Patrol?': ['dog']
}, {
    'What time does Papa get home from work?': ["5"]
}];
var strings = [];
strings.welcome_part1 = "I will ask ";
strings.welcome_part2 = " questions, try to get as many right as you can. Just say the answer. Let's begin. ";

module.exports.app_var = app_var; 
module.exports.questions = questions;
module.exports.strings = strings;