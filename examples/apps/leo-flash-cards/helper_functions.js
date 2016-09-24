'use strict'

function HelperFunctions() {}

HelperFunctions.prototype.populateGameQuestions = function (req, res) {
    this.inc = require('./include');
    var gameQuestions = [];
    var indexList = [];
    var index = this.inc.questions.length;

    if (this.inc.app_var.game_length > index) {
        throw 'Invalid Game Length.';
    }

    for (var i = 0; i < this.inc.questions.length; i++) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < this.inc.app_var.game_length; j++) {
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