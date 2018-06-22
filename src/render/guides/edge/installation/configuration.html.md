---
order: 40
title: Configuration
layout: redirect
---

### Preparation

Copy the Edge licence, SSL key, SSL certificate - and if available Apama license - into the Edge VM folder (directory "home/admin"). 

The files have the following extensions:

* Cumulocity licence file: ".licence"
* SSL Key file: ".key"
* SSL Certificate: ".crt" or ".cert" 
* Apama licence file: “.xml”


### Configuring the Edge server

Once Edge VM is started, you need to run the script “post_installation.sh” to configure the Edge server. The post-installation script is available in the folder “/opt/c8y/utilities”.

1. Browse to the folder "/opt/c8y/utilities". 

		$ cd /opt/c8y/utilities

2. Run the following command and provide the password when prompted.

		$ su admin 
		$ Password: <Enter password for admin user>

3. Run the script "post_installation.sh".

		$ sudo ./post_installation.sh 

You will be prompted to select one of the following options:

* Enter 1 to start post installation execution.
* Enter 2 to update SSL certificates or Cumulocity licence.
	
#### Post installation execution (option 1)
	
1. Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

		$ Enter Tenant Admin Username

1. Provide a new password for the “tenant admin username”. This password is later used to login to the system using the web browser. 

		$ Enter Tenant Admin Password 

1. Provide a domain name, e.g. "myown.iot.com". The domain name must match the domain name of the SSL Certificate.

		$ Enter Domain name 

1. Provide the absolute path for the SSL certificate file, e.g. "/home/admin/<filename>.cert" or "/home/admin/<filename>.crt". 

		$ Enter Domain SSL Certificate file path

1. Provide the absolute path for the “.key” file, e.g. "/home/admin/<filename>.key".

		$ Enter Domain SSL Certificate Private Key file path 

1. Provide the absolute path for the “.license” file e.g. "/home/admin/<filename>.license".

		$ Enter Cumulocity License file path

1. Provide the absolute path for the “.xml” file, e.g. "/home/admin/<filename>.xml".

		$ Enter Apama License file path (Optional. Press Enter to continue)


#### Updating SSL certificates or Cumulocity licence (Option 2)

1. Provide the absolute path for the SSL certificate file, e.g. "/home/admin/<filename>.cert" or "/home/admin/<filename>.crt". 

		$ Enter Domain SSL Certificate file path

1. Provide the absolute path for the “.key” file, e.g. "/home/admin/<filename>.key".

		$ Enter Domain SSL Certificate Private Key file path 

1. Provide the absolute path for the “.license” file e.g. "/home/admin/<filename>.license".

		$ Enter Cumulocity License file path

1. Provide the absolute path for the “.xml” file, e.g. "/home/admin/<filename>.xml".

		$ Enter Apama License file path (Optional. Press Enter to continue)


Once the execution has been completed successfully, a respective message will be displayed. In case of any failure messages, refer to [Operating Cumulocity Edge](/guides/edge/operation).