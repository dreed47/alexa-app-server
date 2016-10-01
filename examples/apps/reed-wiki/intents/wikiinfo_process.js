'use strict'
module.change_code = 1;
var _ = require('lodash')


function Fact() {}

Fact.prototype.process = function (intent, req, res) {
    console.log('wikiinfoprocess');
    
    this.inc = require('../inc/include');

    var slot = req.slot;

    var facts = this.inc.facts;

    if (_.isObject(facts[req.slot('PERSON')]) && _.isArray(facts[req.slot('PERSON')][req.slot('FACT_TYPE')])) {
        console.log('GOOD TO GO');
        var randomFact = _.sample(facts[req.slot('PERSON')][req.slot('FACT_TYPE')]);
        res.say(randomFact).shouldEndSession(false)
        console.log(randomFact);
    }
    else {
        res.say("I can't find a fun fact for that person").shouldEndSession(false)
        console.log('NOT GOOD TO GO');
    }
    //console.log(Object.keys(facts))

}

module.exports = Fact