var output = require(__dirname + "/output.js"),
    api = require(__dirname + "/../api"),
    errorcodes = api.errorcodes,
	testing = process.env.testing || false;

module.exports = function(payload, request, response, testcallback) {

        var date = new Date.now();

        var r = output.end(payload, response, date, errorcodes.NoError);

        if(testing && testcallback) {
            testcallback(null, r);
        }

};