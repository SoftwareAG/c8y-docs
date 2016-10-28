# Running locally

* Make sure that you have node.js v0.10.36 and python2 installed
* Latest Visual Studio is required on Windows 
* Install docpad globally in your system (may require sudo): ```npm install -g docpad```
* Inside the project folder run: ```npm install```
* ...and finally:  ```docpad run```

# preparing nginx to serve documentation
* copy ```./out``` content to webserver webapp dir
* update nginx config to try for ```.html``` files

```
    try_files $uri.html $uri $uri/ @notfound;

```
* navigate to your server url and check if documentation can be viewed by opening ```yoursitename/guides``` url.

