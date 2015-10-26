var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
	console.log("Request handler 'start' was called");	
	
	var body = '<html>' +
		'<head>' + 
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload">'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';
		
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
	
	
	// exec("dir", function(error, stdout, stderr) {
	// 	response.writeHead(200, {"Content-Type": "text/plain"});
	// 	response.write(stdout);
	// 	response.end();
	// });
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent: " + querystring.parse(postData).text + "\n\n\n\n");
	response.end();
}

function show(response) {
	console.log("Request handler 'show' was called");
	response.writeHead(200, {"Content-Type": "image/jpg"});
	fs.createReadStream("C:\\users\\Bradley\\Pictures\\sunkin-plane.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;