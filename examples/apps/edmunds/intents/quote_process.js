'use strict';
module.change_code = 1;
var _ = require('lodash')

function Fact() {}

Fact.prototype.process = function (req, res) {
    console.log('quoteprocess');
    
    this.inc = require('../inc/include');
    var facts = this.inc.facts;
    var reprompt_msg_list = this.inc.reprompt_msg;

    var person = req.session('person') ? req.session('person') : req.slot('PERSON');
    var fact_list = req.session('facts_list') ? req.session('facts_list') : facts;
 
    console.log('PERSON= ' + person);

    var randomFact = _.sample(fact_list);
    var randomFact_translated = _.replace(randomFact, 'NAME', person);
    res.say(randomFact_translated).shouldEndSession(false, _.sample(reprompt_msg_list))
    res.say( _.sample(reprompt_msg_list));
    res.session('person', person);
    fact_list = _.without(fact_list, randomFact);
    
    if (fact_list.length == 0) {
        fact_list.push("I have no more facts to tell you");
    }
    res.session('facts_list', fact_list)
    console.log(randomFact);
    console.log(randomFact_translated);

}

module.exports = Fact