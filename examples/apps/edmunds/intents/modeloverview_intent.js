'use strict';
module.change_code = 1;
var _ = require('lodash')
var striptags = require('striptags');

var DataHelper = require('../inc/data_helper');

function Intent() {}

Intent.prototype.slots_and_utterances = function () {

    //console.log('slots_and_utterances');
    var slots_and_utterances = {
        'slots': {
            'MAKE': 'CARMAKE',
            'MODEL': 'CARMODEL'
        },
        "utterances": [" {-|MAKE} {-|MODEL}"]
    };
    return slots_and_utterances;
}

// Callback for the model overview Intent
Intent.prototype.callback = function (req, res) {
    console.log('modeloverview_intent');
    console.log(req.slot('MAKE'));    
    console.log(req.slot('MODEL'));

    var dataHelper = new DataHelper();
    var carmake = req.session('carmake') ? req.session('carmake') : req.slot('MAKE');
    var carmodel = req.session('carmodel') ? req.session('carmodel') : req.slot('MODEL');

    dataHelper.requestModelOverview(carmake, carmodel).then(function(result) {
        console.log(carmake);
        console.log(carmodel);
        console.log(result);
        res.session('carmake', carmake);
        res.session('carmodel', carmodel);
        
        var message = _.replace(striptags(dataHelper.formatModelOverview(result)),"\n", "");
        res.session("message", message);
        console.log(message);
        res.say(message);
        res.shouldEndSession(false);
        res.send();

    }).catch(function(err) {
        console.log(err.statusCode);
        var prompt = "I didn't have data for make of " + carmake;
        //res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
    });

    //var Fact = require('./quote_process');
    //var fact = new Fact();

    //fact.process(req, res);
    return false;
}
module.exports = Intent