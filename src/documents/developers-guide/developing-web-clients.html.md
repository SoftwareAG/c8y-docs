# Overview

To simplify web application development, Cumulocity comes with a JavaScript client library that abstracts the REST API calls into easy to use functions and parses the response JSON document into JavaScript objects.

# The JavaScript client library

The client library can be loaded from any Cumulocity server from [http://?Cumulocity URL?/ui/clientlib/clientlib.js](https://developer.cumulocity.com/ui/clientlib/clientlib.js). If you want to save bandwidth, you can also use the minified version [clientlib-min.js](https://developer.cumulocity.com/ui/clientlib/clientlib-min.js) from the same directory.

## Prerequisites

The client library takes the server address from a global variable "window.rooturl" and the identifying key for the application from "window.APP\_KEY". If you are running your application on a web browser, you can define those in the HTML page e.g.

    <script type="text/javascript" charset="utf-8">    var rooturl = 'https://?URL?';    var APP_KEY = '?application key?';</script>

Usually, the JavaScript library is being used to develop Web UI applications for Cumulocity, but nothing prevents you from using it for other application development. If you are using plain JavaScript, you can define the variables like this:

    var window.rooturl = 'https://?URL?';var window.APP_KEY = '?application key?';

## Login and callback handlers

The first thing that the application needs to do is to login to the server. This is done using the "C8Y.client.auth.login"-method. It needs the following parameters:

-   tenant (enterprise) ID
-   username
-   password
-   function to be called if the login succeeds
-   function to be called if the login fails
-   boolean whether XBasic authentication is used

Setting the XBasic parameter to "true" prevents the web browser from showing a popup login dialog if the login fails (e.g., due to a wrong password). Technically, this just adds a HTTP header "XBasic : true" to HTTP requests along with the basic authentication information.

    C8Y.client.auth.login('?tenant?', '?username?', '?password?', successFunc, failureFunc, true);

This checks the user credentials from the Cumulocity server and caches them for subsequent calls on the JavaScript execution environment.

Since AJAX calls in JavaScript are asynchronous, all client library functions require "successFunc" and "failureFunc" parameters as illustrated above. If the function call succeeds, the response JSON document is converted to a JavaScript object and the "successFunc" is called with that JavaScript object as a parameter. If there is no response body (e.g. for HTTP "DELETE" requests), an XMLHttpRequest object is passed as a parameter.

If the function call fails, the "failureFunc" is invoked with the XMLHttpRequest object as a parameter. You can get the failure code from the object in the "XMLHttpRequest.status" parameter. The JSON document in the "XMLHttpRequest.response" parameter usually contains more detailed information about the error.

Each function call should have its dedicated success handler that takes care of processing the response from the server. Usually the failure handler is also function specific to be able to provide context specific error handling, but you could also use a generic handler just to show an error message to the user.

## Listing and filtering data

After a successful login you can call any other function. For example, to get all alarms, use

    C8Y.client.alarm.list(filter, successFunc, failureFunc);

The alarms are passed as array parameter to "successFunc".

Since there can be hundreds of alarms from all of the devices, you can supply a filter object to reduce the number of records that the query returns. Usually, list functions support paging in a form of a "pageSize" and a "currentPage" parameter. To, for example, retrieve the first fifty entries of a list, set the "pageSize" parameter to 50 and the "currentPage" parameter to 1:

    var filter = {?????? 'pageSize' = 50,?????? 'currentPage' = 1,?????? 'status' = 'active'}

Alarms can also be filtered by date ranges ("dateFrom" and "dateTo"), by source object ("source") or by status ("status"). More information about supported filters can be found in the [reference guide](index.php?option=com_k2&view=itemlist&task=category&id=286).

## Creating objects

Devices can be created using the inventory functions:

    C8Y.client.inventory.create(deviceData, successFunc, failureFunc);

"deviceData" must contain a valid managed object, e.g.,

    var deviceData = {?????? 'name': '?name of agent?',?????? 'type': '?type of agent?;',?????? 'com_cumulocity_model_Agent': {}}

Once the managed object is created, the "successFunc" is invoked and the server returns information about the newly created managed object

    {
        'self': '?server?/inventory/managedObhects/?moId?',
        'id': '?moId?',
        'name': '?name of agent?',
        'type': '?type of agent?',
        'lastUpdated': '2012-02-20T20:02:40.543+02:00',
        'childAssets': { 'next' : null, 'rev' : null, 'references' : [], 'self' : '?server?/inventory/managedObhects/?moId?/childAssets'},
        'childDevices': { 'next' : null, 'rev' : null, 'references' : [], 'self' : '?server?/inventory/managedObhects/?moId?/childDevices'},
        ?
    }

The return managed object does not have any child assets, child devices or parents yet. The most important value is the managed object ID ("id") that the server automatically created. It will be needed to manipulate the object later, e.g. assigning child assets or devices or external IDs.

To continue with the example, you can add the external ID using an identity function.

    C8Y.client.identity.create(moId, externalId, successFunc, failureFunc);

Here you need the "moId" that was returned in the success callback from the *C8Y.client.inventory.create* and the *externalId* could be e.g.

    var externalId = {?????? 'externalId': '?agent external id?',?????? 'type': '?type of external id?'}

# Other supported methods

In addition to the "list" and "create" methods, most of the REST API wrapper classes support "get", "update" and "delete" methods. Some entities cannot be modified (e.g. audit records) or deleted (e.g. alarms) via the REST API.

||
|Resource|JavaScript 'class'|Supported methods|
|Alarm|C8Y.client.alarm|list, create, get, update|
||C8Y.client.application|list|
|Audit|C8Y.client.audit|list, create, get|
||C8Y.client.auth|login, logout, getUser, getTenant, hasRole|
||C8Y.client.currentUser|get, update|
|Device control|C8Y.client.devicecontrol|list, get, create, changeStatus, fail, success, exeute, pending|
|Event|C8Y.client.event|list, create, get, remove|
|Identity|C8Y.client.identity|list, create, get, remove|
|Inventory|C8Y.client.inventory|list, create, get, update, remove, listDevices, addDevice, removeDevice, listAssets, addAsset, removeAsset|
|Measurement|C8Y.client.measurement|list, get, remove|
|User|C8Y.client.user|list, get, create, remove, listGroups, createGroup, getGroup, getGroupByName, removeGroup, updateGroup, addToGroup, removeFromGroup, getInGroup, getUserGroups, listRoles, addRoleToUser, addRoleToGroup, removeRoleFromUser, removeRoleFromGroup|

# Cross-site scripting

To overcome the cross-site scripting limitation on the web browsers, the SDK includes a proxy that forwards all requests intended to go to the Cumulocity server. More information about the proxy setup can be found on the [hello-world documentation](index.php?option=com_k2&view=item&id=818).

# Hello World with plain HTML and JavaScript

Here is an example on how to implement the "Hello, world!" application using plain HTML and JavaScript.

    <!DOCTYPE html><html><head>?????? <meta charset="utf-8">?????? <title>Hello, world</title>?????? <link rel="stylesheet" href="hello.css" type="text/css" media="screen">?????? <!-- Define Root URL -->?????? <script type="text/javascript" charset="utf-8">?????????????? var rooturl = 'https://developer.cumulocity.com';?????????????? var APP_KEY = 'secretKeyForTheApplication';?????? </script></head><body>???? ??<div id="tabledata">?????????????? Enterprise?????????????? <input type="text" id="tenant" size="30" /><br />?????????????? Username?????????????? <input type="text" id="username" size="30" /><br />?????????????? Password?????????????? <input type="password" id="password" size="30" /><br />?????????????? <br />???? ??</div>???? ??<div id="message"><button onclick="onSubmit()">Login</button></div>?????? <!-- Client lib -->?????? <script src="https://developer.cumulocity.com/ui/clientlib/clientlib.js" type="text/javascript" charset="utf-8"></script>?????? <!-- Application -->?????? <script type="text/javascript">?????????????? var btn;?????????????? function setBtnMessage(content) {?????????????????????? document.getElementById("message").innerHTML = content;?????????????? }?????????????? function onInventory(obj) {?????????????????????? var htmlContent = "<h1>Managed objects</h1><table><tr><th>ID</th><th>Name</th><th>Type</th></tr>";?????????????????????? obj.managedObjects.forEach(function(mo){???????????? ?????? ???????? htmlContent = htmlContent + "<tr><td>" + mo.id + "</td>";???????????? ?????? ???????? htmlContent = htmlContent + "<td>" + mo.name + "</td>";?????????????????????????????? htmlContent = htmlContent + "<td>" + mo.type + "</td></tr>";?????????????????????? });?????????? ?????? ???????? htmlContent = htmlContent + "</table>";?????????????????????? document.getElementById("tabledata").innerHTML = htmlContent;?????????????????????? setBtnMessage("");?????????????? }?????????????? function onInventoryFailure(res) {?????????????????????? setBtnMessage(btn);?????????????????????? alert("Failed to load inventory " + res.status);?????????????? }?????????????? function onLogin(obj) {?????????????????????? C8Y.client.inventory.list(null, 25, 1, onInventory, onInventoryFailure);?????????????? }?????????????? function onLoginFailure(res) {?????????????????????? setBtnMessage(btn);?????????????????????? alert("Login failed " + res.status);?????????????? }?????????????? function onSubmit() {???????????? ?????? ??btn = document.getElementById("message").innerHTML;???????????? ?????? ??setBtnMessage('loading...');?????????????????????? C8Y.client.auth.login(document.getElementById("tenant").value, document.getElementById("username").value,?????????????????????????????? document.getElementById("password").value, onLogin, onLoginFailure, true);?????????????? }?????? </script></body></html>

As you can see from the beginning, we are including a CSS to make the UI a bit prettier. Here is an example:

    body {?????? background-color: #AAAAAA;?????? text-align: center;}table {?????? background: #666666;?????? border: 1px solid black;?????? table-layout: fixed;?????? text-align: left;?????? margin-left:auto; ?????? margin-right:auto;}tr {?????? background-color: #666666;}td, th {?????? background-color: #666666;?????? color: #FFCC00;?????? padding: 5px;}th {?????? color: #000000;}

Next, we are setting the "rooturl" and "APP\_KEY" as discussed earlier on this document. In the beginning of the HTML document body, we show the login form to start with. Later that section ("div id="tabledata"") will be replaced with the table containing the managed objects loaded from the server.

After the input boxes for tenant, username and password, we have a "Login" button that will be replaced with a 'loading...' text after the button is pressed. It will be finally emptied, when the data has been loaded.

Finally, we load the client library ("clientlib.js"). The first function to be called will be "onSubmit", which is executed by pressing the login button. The function will replace the button with a 'loading...' message and try to login to the Cumulocity server using the credentials that the user entered into the login form. If login succeeds, "onLogin" is called, which will just query the first 25 managed objects from the server.

If that query succeeds, "onInventory" is called. "onInventory" will loop through all returned managed objects and create an HTML table from the objects. It will replace the login form with that table.

If the REST API calls fail, "onLoginFailure" resp. "onInventoryFailure" is called and a message is shown to the user.
