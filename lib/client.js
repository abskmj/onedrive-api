var promise = require('bluebird');
var request = require('request');

class Client {
    constructor(accessToken = _missing('accessToken')) {
        this.accessToken = accessToken;
    }

    static _missing(parameter) {
        throw `${parameter} is missing`;
    }

    setAccessToken(accessToken = _missing('accessToken')) {
        this.accessToken = accessToken;
    }

    _requestOnedrive(options, callback) {

        var baseRequest = promise.promisify(request.defaults({
            baseUrl: 'https://graph.microsoft.com/v1.0/me/',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'bearer ' + this.accessToken
            },
            method: 'GET'
        }));

        return baseRequest(options)
            .then(function (response) {
                return promise.resolve(response).asCallback(callback);
            }).catch(function (error) {
                return promise.reject(error).asCallback(callback);
            });
    }
}

module.exports = Client;