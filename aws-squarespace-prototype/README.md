# AWS Squarespace Prototype
This is a prototype of Squarespace integration with AWS. 


## Purpose
The goal is to programatically get order information out of Squarespace and push it into another system.


## Methods to get data out of Squarespace
Squarespace has 2 ways to get data programmatically out of the system using Commerce API and Code Injection.

### Commerce API  & Orders API keys
The Commerce API available to those accepted into the pricate beta. I applied for developer access to it but I have not heard back from Squarespace. I imagine that this will stay in beta for a long time.  
https://support.squarespace.com/hc/en-us/articles/236297987-Orders-API-keys

### Code Injection
Code injection is embedded Javascript on the order confirmation page.  The only data available is orderId, orderSubtotal,orderSubtotalCents, orderGrandTotal, orderGrandTotalCents, and customerEmailAddress. https://support.squarespace.com/hc/en-us/articles/205815908-Using-Code-Injection

### Using Code Injection
You can add custom code and scripts to your site using the Code Injection area in Advanced Settings. Before you begin If you add code to Code Injection, we may ask you to disable it while editing ...
support.squarespace.com


## How it works
<img src="https://github.com/dwkelly/AWS-Sandbox/raw/master/aws-squarespace-prototype/diagrams/data_flow_diagram.png" />

 In this repo is a prototype of the solution where I was able to get data pushed out of my test Squarespace site to AWS using Squarespace code injection.

 
## Security Concerns
In order for embedded Javascript to send messages to the SQS queue appropiate AWS Identity and Access Management (IAM)  permissions  are  required. I would recommend only allowing this user to send messages to the queue. This user should not be able to perform any other actions. The Access Key Id and the Private Key will be embedded in the javascript.