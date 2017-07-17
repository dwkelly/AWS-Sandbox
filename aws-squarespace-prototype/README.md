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
