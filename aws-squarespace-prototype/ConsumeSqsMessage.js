var AWS = require('aws-sdk');
var http = require('http');

AWS.config.loadFromPath('./consumer-config.json');

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});


const queueUrl = "https://sqs.us-east-1.amazonaws.com/399091925902/test_queue";

var resultString ="";
var result;

var params = {
	MaxNumberOfMessages: 10,
	MessageAttributeNames: ["orderId","orderSubtotal","orderSubtotalCents","orderGrandTotal","orderGrandTotalCents","customerEmailAddress"], 
	QueueUrl: queueUrl,
	VisibilityTimeout: 10,
	WaitTimeSeconds: 0
};

sqs.receiveMessage(params, function(err, data){
	if (err){
		console.log("Receive Error", err);
	} else {
		console.log("Data Received");
		resultString= data.toString();
		result= data;
	}
});

const server = http.createServer(function (req, res){
		res.writeHead(200, {'Content-type': 'text/html'});
//		res.end(result.Messages);
		res.end(new Buffer(JSON.stringify(result)));
}).listen(8080);

console.log("Running over http://locahost:8080");