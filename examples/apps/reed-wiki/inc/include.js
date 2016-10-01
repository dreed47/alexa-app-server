'use strict'
module.change_code = 1;

var app_var = [];
app_var.one = "test";

var facts = {};
facts['alex'] = {};
facts['alex']['silly'] = ["Saab", "Volvo", "BMW"];
facts['alex']['fun'] = ["Saab", "Volvo", "BMW"];
facts['alyssa'] = {};
facts['alyssa']['silly'] = ["Saab", "Volvo", "BMW"];
facts['alyssa']['fun'] = ["Saab", "Volvo", "BMW"];


module.exports.facts = facts;