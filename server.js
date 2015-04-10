
var cfenv = require("cfenv");
var under_maintenance = require('under-maintenance');

var appEnv   = cfenv.getAppEnv();

var app = under_maintenance({	
	api : ['/service1/rest/v1', '/service2/rest/v1'],
    message : { message : "unavailable"},
    root : './public',
    page : 'down.html'
    	
});

app.listen(appEnv.port);
console.log("server starting on " + appEnv.url);