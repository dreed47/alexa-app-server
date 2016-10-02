'use strict'
module.change_code = 1;
var _ = require('lodash')

function Fact() {}

Fact.prototype.process = function (req, res) {
    console.log('quoteprocess');
    
    this.inc = require('../inc/include');
    var slot = req.slot;
    var facts = this.inc.facts;

console.log("SLOTPERSON=" + req.slot('PERSON'));

    var person = req.session('person') ? req.session('person') : req.slot('PERSON');
    var fact_list = req.session('facts_list') ? req.session('facts_list') : facts;
 
    console.log('PERSON= ' + person);

    if (_.isArray(fact_list)) {
        var randomFact = _.sample(fact_list);

        var randomFact_translated = _.replace(randomFact, 'NAME', person);

        res.say(randomFact_translated).shouldEndSession(false)
        res.session('person', person);
        fact_list = _.without(fact_list, randomFact);
        
        if (fact_list.length == 0) {
            fact_list.push("I have no more facts to tell you");
        }

        res.session('facts_list', fact_list)
        console.log(randomFact);
        console.log(randomFact_translated);
    }
    else {
        res.say("I can't find a fact for " + person).shouldEndSession(true)
    }

}

module.exports = Fact