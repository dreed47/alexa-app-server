'use strict'

function HelperFunctions() {}

HelperFunctions.prototype.populateGameQuestions = function (req, res) {
    var app = [];
    app.inc = require('./include.js');
    var gameQuestions = [];
    var indexList = [];
    var index = app.inc.questions.length;

    if (app.inc.app_var.game_length > index) {
        throw 'Invalid Game Length.';
    }

    for (var i = 0; i < app.inc.questions.length; i++) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < app.inc.app_var.game_length; j++) {
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;

}
module.exports = HelperFunctions