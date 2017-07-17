var AWS = require('aws-sdk');
var http = require('http');

AWS.config.loadFromPath('./consumer-config.json');

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});