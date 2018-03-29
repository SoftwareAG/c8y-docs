---
order: 80
layout: redirect
title: Logging
---

For hosted deployment the standard output should be used.

For external/legacy deployment logging into the application implies using spring logging described in [this article](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html). 

The following locations are searched for log-back file:

* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}/logging.xml
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}/logging.xml
* {user/home}/.{application_name}/logging.xml
* {user/home}/{application_name}/logging.xml
* {CONF_DIR}/.{application_name}/logging.xml
* {CONF_DIR}/{application_name}/logging.xml
* /etc/{application_name}/logging.xml