const axios = require('axios');
const config = require('./conf');

const httpTimeStamp = () => {
    return Math.floor(Date.now() / 1000);
};

const httpMethods = {
    get: 'GET',
    post: 'POST',
};


const httpSigHelper = (strsForSig) => {
    var base_str_partial = reduceToString(strsForSig);

    return (timestamp, otherStr) => {
        const base_str = base_str_partial + timestamp;
        var hmacsha256 = CryptoJS.HmacSHA256(base_str, otherStr);
        return api_signature = CryptoJS.enc.Base64.stringify(hmacsha256);
    };

}


module.exports = {
    apiGet: (url, data, connParams) => {
        var timestamp = new Date().getTime() / 1000 | 0;
        var base_str = config.oAuth.CB + connParams.access_token + timestamp;
        var hmacsha256 = CryptoJS.HmacSHA256(base_str, config.oAuth.CL_SEC);
        var api_signature = CryptoJS.enc.Base64.stringify(hmacsha256);

        // TODO: Move this to a config
        var headers = {
            Authorization: 'Bearer ' + connParams.access_token,
            sender: 'OMS'
        }

        var wholeUrl = '';

        if (data.length === 0) {
            wholeUrl = url;
        } else {
            wholeUrl = url + '/' + data;
        }

        // Return promise
        return axios.get(wholeUrl, {
            headers: headers,
            validateStatus: function(status) {
                return true; // default
            },
            timeout: 5000
        });
    },
    apiPost: (url, data, connParams) => {
        var timestamp = new Date().getTime() / 1000 | 0;
        var base_str = config.oAuth.CB + connParams.access_token + timestamp;

        // TODO: Move this to a config
        var headers = {
            Authorization: 'Bearer ' + connParams.access_token,
            sender: 'OMS',
            'content-type': 'application/json'
        }

        console.log(headers);

        // Return promise
        return axios({
            method: 'post',
            url: url,
            data: data,
            headers: headers,
            validateStatus: function(status) {
                return true; // default
            }
        })
    }
}