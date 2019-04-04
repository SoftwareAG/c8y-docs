---
order: 40
title: Subscribing
layout: redirect
---

Execute the following command to subscribe your tenant to the uploaded microservice:

```shell
$ ./microservice subscribe -n hello-world -d <URL> -u <username> -p <password> -te <tenant> -id <APPLICATION_ID>
```

It will result in tenant subscription to an application specified by the ID parameter. If the user has already been subscribed, a warning message will be displayed.
