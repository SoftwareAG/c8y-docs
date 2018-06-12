---
order: 30
title: Using Postman
layout: redirect
---

A convenient way to explore REST interface and the Cumulocity database content are graphical REST clients such as [Postman](https://www.getpostman.com/).

![Example REST client](/guides/images/rest/postman.png)

Cumulocity provides numerous online API examples. If you want to make use of them, [download and install Postman](https://www.getpostman.com/). After starting Postman, you can choose to either create an account or click "Take me straight to the app". Then click the button below and choose the variant of Postman that you have just installed. You may see a browser security prompt asking you whether you actually want to run Postman (on Windows "Electron").

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7c7d00719ab238097686)

Now, click the "Collections" tab on the top left of Postman. You should see a folder "Cumulocity API" with the examples. Open that folder and the sub-folder "Alarms", then click on "Get collection of alarms". This shows an example on how to get alarms from Cumulocity. 

Note that the example contains placeholders, in this case a placeholder "url" in "{{url}}/alarm/alarms". You need to tell Postman how to fill these placeholders and by this, how to connect to your Cumulocity account. To do so, create an ["environment"](https://www.getpostman.com/docs/environments) and configure the placeholders.

* Click on the cogwheel on the top right and choose "Manage Environments", then click the "Add".
* Enter a name for the environment (e.g., your tenant name), then add values for the placeholders.
* Configure a key "url" with a value of "https://&lt;yourURL&gt;.cumulocity.com". Click "Submit".
* Configure a key "auth" with the value of the "Authorization" header for the REST requests.
* Click "Add", then close the dialog. Now select your newly created environment from the drop-down box on the top right, that initially reads "No environment".

<img src="/guides/images/rest/postmanenvironment.png" alt="Postman environment setup" style="max-width: 50%">

> A simple way to determine the correct value for the "auth" key is to use a web tool. Example: Assume your tenant name is "tenant", your username is "me" and your password is "secret". Go to http://ostermiller.org/calc/encode.html, type "tenant/me:secret" into the text area, then click the "Encode" button in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for "auth".

Now start exploring the API.
