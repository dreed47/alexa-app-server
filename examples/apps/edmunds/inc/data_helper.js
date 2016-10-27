'use strict'

var _ = require('lodash')
var rp = require('request-promise')
var ENDPOINTx = 'https://api.edmunds.com/api/editorial/v2/ford/f-150?view=full&fmt=json&api_key=q7ark6wpshqmnyjwt4qj2w6e'
var ENDPOINT = 'https://api.edmunds.com/api'
var API_KEY = 'q7ark6wpshqmnyjwt4qj2w6e'

function DataHelper() {}

DataHelper.prototype.requestMakeList = function() {
    return this.getMakeList().then(
        function(response) {
            console.log('success - received make list ')
            return response.body
        }
    )
}

DataHelper.prototype.getMakeList = function() {
    var options = {
        method: 'GET',
        uri: ENDPOINT + '/vehicle/v2/makes?view=basic&fmt=json&api_key=' + API_KEY,
        resolveWithFullResponse: true,
        json: true
    }
    return rp(options)
}

DataHelper.prototype.requestModelOverview = function(carmake, carmodel) {
    return this.getModelOverview(carmake, carmodel).then(
        function(response) {
            console.log('success - received info for ' + carmake + ', ' + carmodel)
            return response.body
        }
    )
}

DataHelper.prototype.getModelOverview = function(carmake, carmodel) {
    var options = {
        method: 'GET',
        uri: ENDPOINT + '/editorial/v2/' + carmake + '/' + carmodel + '?view=full&fmt=json&api_key=' + API_KEY,
        resolveWithFullResponse: true,
        json: true
    }
    return rp(options)
}

DataHelper.prototype.formatModelOverview = function(result) {
    var test = ''
    return _.template(' ${description} ${introduction}')({
        description: result.description,
        introduction: result.introduction
    })

}
module.exports = DataHelper