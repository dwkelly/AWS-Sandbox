/**
The receives messags off an SQS queue and prints them to the localhost:8080. The fields that will be included are orderId, orderSubtotal,orderSubtotalCents, orderGrandTotal, orderGrandTotalCents, and orderGrandTotalCentsorderGrandTotalCentsorderGrandTotalCents

**/

var AWS = require('aws-sdk');
var http = require('http');

AWS.config.loadFromPath('./consumer-config.json');

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});


const queueUrl = "https://sqs.us-east-1.amazonaws.com/399091925902/test_queue";

var resultString ="";
var result= {};

var params = {
	MaxNumberOfMessages: 10,
	MessageAttributeNames: ["All"], 
//	MessageAttributeNames: ["orderId","orderSubtotal","orderSubtotalCents","orderGrandTotal","orderGrandTotalCents","customerEmailAddress"], 
	QueueUrl: queueUrl,
	VisibilityTimeout: 0,	
	WaitTimeSeconds: 10
};

function receiveMessage (){
		sqs.receiveMessage(params, function(err, data){
		if (err){
			console.log("Receive Error", err);
		} else {
			console.log("Data Received");
			resultString= data.toString();
			result = data;
		}
	});
}
receiveMessage();


const server = http.createServer(function (req, res){
		receiveMessage();
		res.writeHead(200, {'Content-type': 'text/html'});

		JSON.stringify(result);
		var printString ="";
		var i;
		for (i=0 ; i< result.Messages.length; i++){
//			printString+= JSON.stringify(result.Messages[i].MessageAttributes);
			//console.log(JSON.stringify(result.Messages[i].MessageAttributes));
			console.log(result.Messages[i].MessageAttributes);
			if(result.Messages[i].MessageAttributes.customerEmailAddress!= null){
				printString+= "result "+ i;
				printString+= "<br/>orderId: "+result.Messages[i].MessageAttributes.orderId.StringValue;
				printString+= "<br/>customerEmailAddress: "+result.Messages[i].MessageAttributes.customerEmailAddress.StringValue;
				printString+= "<br/>orderSubtotal: "+result.Messages[i].MessageAttributes.orderSubtotal.StringValue;
				printString+= "<br/>orderSubtotalCents: "+result.Messages[i].MessageAttributes.orderSubtotalCents.StringValue;
				printString+= "<br/>orderGrandTotal: "+result.Messages[i].MessageAttributes.orderGrandTotalCents.StringValue;
				printString+= "<br/>orderGrandTotal: "+result.Messages[i].MessageAttributes.orderGrandTotal.StringValue+"<br/><br/><br/>";
			}
		}
		
//		res.end(new Buffer(JSON.stringify(result.Messages)+printString));
		res.end(new Buffer(printString));


}).listen(8080);

console.log("Running over http://locahost:8080");