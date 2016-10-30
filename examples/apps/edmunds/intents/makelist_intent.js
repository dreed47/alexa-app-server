'use strict';
module.change_code = 1;
var _ = require('lodash')
var striptags = require('striptags');

var DataHelper = require('../inc/data_helper');

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        "utterances": [" {list|show} {all|} makes"]
    };
    return slots_and_utterances;
}

// Callback for the make list Intent
Intent.prototype.callback = function (req, res) {
    console.log('makelist_intent');

    var dataHelper = new DataHelper();
    //var carmake = req.session('carmake') ? req.session('carmake') : req.slot('MAKE');
    //var carmodel = req.session('carmodel') ? req.session('carmodel') : req.slot('MODEL');

    dataHelper.requestMakeList().then(function(result) {

        //console.log(result);
        var makemodel = "";
        _.forIn(result.makes, function(make, key) {
            console.log(make.name);
            _.forIn(make.models, function(modell, modelkey){
                //console.log(modell.name);
                makemodel = makemodel + modell.name + "</br>";
            });
        });        
        //res.session('makelist', result);
        //res.session('modellist', makemodel);
        //res.session('carmodel', carmodel);
        
        res.session("message", 'message');
        res.say('message');
        res.shouldEndSession(false);
        res.send();

    }).catch(function(err) {
        console.log(err.statusCode);
        var prompt = "I didn't have data for make list ";
        //res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
    });

    return false;
}
module.exports = Intent