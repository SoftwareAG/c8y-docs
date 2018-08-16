---
order: 30
title: Login flow
layout: redirect
---

### Login flow 

After a successful redirect to platform after login with remote authorization server, a code parameter is passed as request parameter and should be used in exchange for access token. Token will be saved as a cookie in the browser. 

### POST to login with oauth

Required role: no authorization required

Example request: Post to login with authorization code grant

    POST tenant/oauth?grant_type=authorization_code&code=<<code>>
    Host: ...

Example response:

    HTTP/1.1 200 OK
    Content-Length: ...
    Set-Cookie: ...




