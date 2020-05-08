---
weight: 80
title: Device certificates
layout: redirect
---

### Overview

### JWT Token retrieval

Device which is connected by certificates can receive a token which can be used later for authenticate http requests. Note [JWT token authentication](/reference/rest-implementation/#http-usage) must be enabled to receive token.


* Firstly device subscribe to the topic  <kbd>s/dat</kbd>.
* Then device publish empty message on the topic  <kbd>s/uat</kbd>.
* After a while token will be published on subscribed  <kbd>s/dat</kbd> topic in format :

	    71,<<Base64 encoded JWT token>>
	    
