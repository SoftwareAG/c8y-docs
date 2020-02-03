---
weight: 30
title: Configuration
layout: redirect
aliases:
  - /edge/installation/configuration
---

### Preparation

Copy the Edge license, SSL key, SSL certificate and Apama license (if obtained) into the Edge VM. Use WINSCP, SCP, FTP or any other file transfer tool to transfer the files from your host OS to Edge VM (Linux OS).

You can copy the files to the Edge VM folder */home/admin*. 

The files have the following extensions:

* Cumulocity IoT Edge license file: ".licence"
* SSL Key file: ".key"
* SSL Certificate: ".crt" or ".cert" 
* Apama license file: “.xml”

>**Important**: Do not rename the license file received from Cumulocity support. Renaming the license file causes failure of the post-installation process.

### Preparing the Cumulocity post-installer configuration file

The post-installer configuration file is a key-value based configuration file which acts as input to the post-installation script while configuring the EDGE server.

A template of this configuration file is placed within the EDGE VM under */opt/c8y/utilities/post-installer/* as *config.dat*. In order to use this, you need to update the file with the correct values.

>**Important**: This template file is overwritten if the post-installation script is invoked and inputs are entered manually through console.
Therefore it is advisable to copy this template file to a different location and edit the same.

The following keys are available in the configuration file:

`tenant.admin.username` : Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

`tenant.admin.password` : Provide a new password for the *tenant admin username*. This password is later used to login to the system using the web browser.

>**Info**: The password should be base64-encoded only. For example, if you want the password to be edge@123 then the encoded value ZWRnZUAxMjM= should be used in the configuration file.

>**Important**: The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

`tenant.domain.name` : Provide a fully qualified domain name. For example, "myown.iot.com". Here, you must have the Cumulocity IoT Edge license for the domain name **iot.com** or **myown.iot.com**. <br>The domain name must adhere to all the domain name validation rules as described in [Domain name validation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

>**Important**: Once configured, the domain name cannot be changed. Make sure to use the name finally desired.

`ssl.certificate` : Provide the absolute path of the SSL certificate file. The file extension should either be “.crt” or “.cert”. For example, /home/admin/myown-iot-com.crt. Make sure that the file path is valid and the file exists in the local machine.

>**Info**: The SSL certificate that you provide here must be valid for the domain name that you have provided in the previous step. 

`ssl.certificate.key` : Provide the absolute path of the SSL certificate key file. The file extension must be “.key.”. For example, /home/admin/myown-iot-com.key.
Make sure that the file path is valid and the file exists in the local machine.

>**Info**: The SSL key that you provide here must be valid for the domain name that you have provided in the previous step.

`c8y.license` : Provide the absolute path of the license file. The file extension must be “.licence”. For example, /home/admin/myown.iot.com.licence.
Make sure that the file path is valid and the file exists in the local machine.

`apama.license` : Provide the absolute path of the Software AG Apama license file. The file extension must be ".xml". For example, */home/admin/ApamaServerLicense101.xml*. <br> <br>This is an optional license file, in case you do not want to use it you should  leave this field empty.
If the file path is specfied, make sure that the file path is valid and the file exists in the local machine.


The following parameters are required only if you want to update the network parameters in the EDGE VM. You may skip these parameters if network is already configured or it is not applicable in your case.

`network.ip` : Provide the new IP address for the ethernet interface. For example, 192.168.56.120

`netmask` : Provide the netmask IP for your network. For example, 255.255.255.0

`gateway.ip` : Provide the gateway IP for your network. For example, 192.168.56.1

`dns.server.ip` : Provide the DNS Server IP for your network. For example, 192.168.56.1

>**Info**: If the DNS Server IP is unknown, you can enter the previously entered gateway IP here. If any of the network parameters are not available, contact your network administrator.

### Configuring the Edge server

Once Edge VM is started, you need to run the script *post_installation.sh* to configure the Edge server. The post-installation script is available in the folder */opt/c8y/utilities*.

Post installation should only be run after the platform initialization is successful which can be checked by running below REST API: 

<img src="/images/edge/edge-check-platform.png" name="Check platform initialization"/> 

Usually the platform comes up within 2 minutes. 

1. Browse to the folder */opt/c8y/utilities*. 

	`$ cd /opt/c8y/utilities`

2. Run the following command and provide the password when prompted.

	`$ su admin`
	
	`$ Password: <Enter password for admin user>`

3. Run the script *post_installation.sh*.

	` $ sudo ./post_installation.sh`


You will be prompted to select one of the following options:

1. [Configure network](/edge/installation/#option-1-configure-network)
2. [Run post-installation](/edge/installation/#option-2-run-post-installation)
3. [Update license and SSL certificates](/edge/installation/#option-3-update-license-and-ssl-certificates)
4. [Run post-upgrade](/edge/installation/#option-4-run-post-upgrade)
5. [Expand data disk size](/edge/installation/#option-5-expand-data-disk-size)
6. [Update tenant password](/edge/installation/#option-6-update-tenant-password)
7. [Configure Edge Agent](/edge/installation/#option-7-configure-edge-agent)
8. Exit

>**Important**:<br>
- Option 1 is the first step that you must perform while configuring the Edge server. Also, if you change the network configuration of a Hypervisor, you must configure the network using option 1.<br> 
- Option 3, 4 and 6 will only work after you have successfully completed the post-installation setup (Option 2). <br>
- Option 1 and 4 cannot be invoked from a remote connection like SSH. You will have to run these directly from the terminal within the VM.

#### Option 1 - Configure network

>**Important**: This task needs to be invoked from within the VM and cannot be invoked through a remote connection.

First, select the type of input you want to use.

`* Enter [F] to take input from file or [C] to take input from console: `

You have the choice to  enter the network parameters manually through the console or through a file. 

##### Console input

   1. Provide the new IP address for the ethernet interface. For example, 192.168.56.120

	`* Enter new IP address for ethernet interface:`
	
2. Provide the netmask IP for your network. For example, 255.255.255.0
	
	`* Enter netmask:`

3. Provide the gateway IP for your network. For example, 192.168.56.1
	
	`* Enter gateway IP:`

4. Provide the DNS Server IP for your network. For example, 192.168.56.1
	
	`* Enter DNS Server IP:`
	
	>**Info**: If the DNS Server IP is unknown, you can enter the previously entered gateway IP here. If any of the network parameters are not available, contact your network administrator.

##### File input
 
Provide the absolute path of the configuration file. The network parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

`* Enter existing file path containing network parameters:`

Confirm to continue with the network configuration process.

The network configuration process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 2 - Run post-installation

First, select the type of input you want to use.

`* Enter [F] to take input from file or [C] to take input from console:`

You have the choice to enter the post-installation parameters manually through the console or through a file. 

##### Console input

1. Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

	`* Enter tenant admin username:`

2. Provide a new password for the “tenant admin username”. This password is later used to login to the system using the web browser. 

	`* Enter tenant admin password:`

	>**Info**: The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

3. Re-enter the previously entered password to confirm it. 

	`* Re-enter tenant admin password:`

4. Provide a fully qualified domain name. For example, "myown.iot.com". Here, you must have the Cumulocity IoT Edge license for the domain name **iot.com** or **myown.iot.com**.<br>The domain name must adhere to all the domain name validation rules as described in [Domain name validation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

	`* Enter tenant domain name:` 

	>**Important**: Once configured, the domain name cannot be changed. Make sure to use the name finally desired.

5. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert". For example, */home/admin/myown-iot-com.crt*.

	`* Enter domain ({your-domain-name}) SSL certificate file path (*.crt|*.cert):`

	>**Info**: The SSL certificate that you provide here must be valid for the domain name that you have provided in the previous step.

6. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.". For example, */home/admin/myown-iot-com.key*.
	
	`* Enter domain ({your-domain-name}) SSL certificate key file path (*.key):`

	>**Info**: The SSL key that you provide here must be valid for the domain name that you have provided in the previous step.

7. Provide the absolute path of the license file. The file extension must be ".licence". For example, */home/admin/myown.iot.com.licence*.

	`* Enter domain ({your-domain-name}) Cumulocity licence file path (*.licence):`
	
8. Provide the absolute path of the Software AG Apama license file. The file extension must be ".xml". For example, */home/admin/ApamaServerLicense101.xml*. <br> <br>This is an optional license file, you can press [Enter] to continue without providing license.

	`* Enter Software AG Apama licence file path (optional):`

9. Provide the URL for the Cumulocity tenant (cloud or on-premise) to control your Edge device remotely. For example, "https://&lt;*tenant-domain*&gt;.cumulocity.com".

	`* Enter cloud URL (leave blank to disable remote management):` 

	You can also configure the Edge agent with the Cumulocity tenant URL by running the post-installation script and selecting [Option 7 - Configure Edge Agent](/edge/installation/#option-7-configure-edge-agent).
		
Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File Input

Provide the absolute path of the configuration file. The installation parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

`* Enter existing file path containing post-installation parameters:`

Confirm to continue with the post-installation process.

The post-installation process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 3 - Update license and SSL certificates

First, select the type of input you want to use.

`* Enter [F] to take input from file or [C] to take input from console:`

You have the choice to enter the update parameters manually through the console or through a file. 

##### Console input

1. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert". For example, */home/admin/myown-selfsigned.crt*.

	`* Enter domain ({previously-entered-domain-name}) SSL certificate file path (*.crt|*.cert):`

2. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.". For example, */home/admin/myown-selfsigned.key*.

	`* Enter domain ({previously-entered-domain-name}) SSL certificate key file path (*.key):`

3. Provide the absolute path of the license file. The file extension must be ".licence". For example, */home/admin/myown.iot.com.licence*.

	`* Enter domain ({previously-entered-domain-name}) Cumulocity licence file path (*.licence):`
	
4. Provide the absolute path of the Software AG Apama license file. The file extension must be ".xml",  e.g. */home/admin/ApamaServerLicense101.xml*.<br> <br>This is an optional license file, you can press [Enter] to continue without providing license.

	`* Enter Software AG Apama licence file path (optional):`

Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File input

Provide the absolute path of the configuration file. The update parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

`* Enter existing file path containing update parameters:`

Confirm to continue with the update process.

The update process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 4 - Run post-upgrade

>**Important**: This task needs to be invoked from within the VM and cannot be invoked through a remote connection.

>**Info**: During this process, the previously used password in the source will be validated as per Cumulocity's password policy. In case the password is not compliant with the policy, the user will be prompted to enter the tenant password without which the post-upgrade task cannot be completed.

Confirm to continue with the post-upgrade process.

The post-upgrade process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

If users have configured the network in the ‘source’ version the new configuration will be done in the upgrade version when this task is executed.

#### Option 5 - Expand data disk size

Expanding the data disk size consists of two steps:

1. Increasing the physical HDD size from the hypervisor level
2. From within the VM, add space to the disk by executing option 5 of the post-installation script

So as a first step you need to carry out the following prior to selecting option 5.
 
1. Shutdown the VM.

2. Edit the VM and on the **Virtual Hardware** tab increase the disk space of **Hard disk 2** to your needs.<br><img src="/images/edge/edge-configuration-edit.png" name="Edit VMware"/> 

3. Start the VM and run the *post_installation.sh* script.

4. From the option list, select option 5, and confirm to continue with expanding the data disk size.

The disk size expanding process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 6 - Update tenant password

The password updated using this option acts as the password for the administrators of both the tenants, that is, **admin** user of the 'edge' tenant and **edgeadmin** user of the management tenant. Using these credentials, the administrators can log in to the respective tenant through a web browser.

`* Enter new tenant admin password:`

>**Info**: The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

Re-enter the previously provided password to confirm it.

`* Re-enter tenant admin password:`

Confirm to continue with updating the tenant password.

The update tenant password process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

>**Info**: The Cumulocity platform does not allow to use any of the last 10 previously used passwords.

#### Option 7 - Configure Edge Agent

Provide the URL for the Cumulocity tenant (cloud or on-premise). For example, "https://&lt;*tenant-domain*&gt;.cumulocity.com".

	`* Enter cloud URL (leave blank to disable remote management):`

After providing the tenant URL, you have to register your Edge device with the Cumulocity tenant. For more information, see [Registering the Edge device with a Cumulocity tenant](/edge/usage/#registering-the-edge-device-with-the-cumulocity-tenant).

>**Important**: If you have configured the Cumulocity tenant URL during the post installation and then use this option with a blank URL, you will disable the Cumulocity tenant connectivity.