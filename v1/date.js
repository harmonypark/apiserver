var output = require(__dirname + "/output.js"),
    api = require(__dirname + "/../api"),
    errorcodes = api.errorcodes,
	testing = process.env.testing || false;

module.exports = {

	now: function(payload, request, response, testcallback) {

        var date = Date.now();

        var r = output.end(payload, response, { now: date }, errorcodes.NoError);

        if(testing && testcallback) {
            testcallback(null, r);
        }
	}

};