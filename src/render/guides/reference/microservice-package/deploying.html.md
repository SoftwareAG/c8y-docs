---
order: 30
title: Deploying
layout: redirect
---

To deploy an application you can run deploy goal.

    $microservice deploy -n hello-world -d {url} -u {username} -p {password} -te {tenant}
    
The successful execution will create an application with the specified name, if it does not exist yet. Then it will upload the "hello-world.zip" file into the platform. 
