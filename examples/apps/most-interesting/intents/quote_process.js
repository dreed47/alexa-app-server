'use strict'
module.change_code = 1;
var _ = require('lodash')

function Fact() {}

Fact.prototype.process = function (intent, req, res) {
    console.log('quoteprocess');
    
    this.inc = require('../inc/include');
    var slot = req.slot;
    var facts = this.inc.facts;

    var person = req.session('person') ? req.session('person') : req.slot('PERSON');
    var fact_type = req.session('fact_type') ? req.session('fact_type') : req.slot('FACT_TYPE');
    var fact_list = req.session('facts_list') ? req.session('facts_list') : facts[person][fact_type];

     
    console.log('PERSON= ' + person);
    console.log('FACT_TYPE= ' + fact_type);

    if (_.isObject(facts[person]) && _.isArray(fact_list)) {
        var randomFact = _.sample(fact_list);

        res.say(randomFact).shouldEndSession(false)
        res.session('person', person);
        res.session('fact_type', fact_type);
        fact_list = _.without(fact_list, randomFact);
        
        if (fact_list.length == 0) {
            fact_list.push("I have no more " + fact_type + " facts to tell you");
        }

        res.session('facts_list', fact_list)
        console.log(randomFact);
    }
    else {
        res.say("I can't find a " + fact_type + " fact for " + person).shouldEndSession(true)
    }

}

module.exports = Fact