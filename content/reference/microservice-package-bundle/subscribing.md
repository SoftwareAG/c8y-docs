---
weight: 40
title: Subscribing
layout: redirect
---

To subscribe your tenant to the uploaded microservice you can run:

    microservice subscribe -n hello-world -d {url} -u {username} -p {password} -te {tenant} -id {applicationId}
    
It will result in tenant subscription to an application specified by the "id" parameter. If the user has already been subscribed, a warning will be displayed. 
