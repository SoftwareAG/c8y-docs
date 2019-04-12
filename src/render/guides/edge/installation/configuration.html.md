---
order: 30
title: Configuration
layout: redirect
---

### Preparation

Copy the Edge license, SSL key, SSL certificate and Apama license (if obtained) into the Edge VM. Use WINSCP, SCP, FTP or any other file transfer tool to transfer the files from your host OS to Edge VM (Linux OS).

You can copy the files to the Edge VM folder */home/admin*. 

The files have the following extensions:

* Cumulocity license file: ".licence"
* SSL Key file: ".key"
* SSL Certificate: ".crt" or ".cert" 
* Apama license file: “.xml”

>**Important**: Do not rename the license file received from Cumulocity support. Renaming the license file causes failure of post installation.

### Configuring the Edge server

Once Edge VM is started, you need to run the script *post_installation.sh* to configure the Edge server. The post-installation script is available in the folder */opt/c8y/utilities*.

Post installation should only be run after the platform initialization is successful which can be checked by running below REST API: 

<img src="/guides/images/edge/edge-check-platform.png" name="Check platform initialization"/> 

Usually the platform comes up within 2 minutes. 


1. Browse to the folder */opt/c8y/utilities*. 

	```shell
		$ cd /opt/c8y/utilities
	```

2. Run the following command and provide the password when prompted.

	```shell
		$ su admin 
		$ Password: <Enter password for admin user>
	```

3. Run the script *post_installation.sh*.

	```shell
		$ sudo ./post_installation.sh
	```


You will be prompted to select one of the following options:

1. Configure network
2. Run post-installation
3. Update license and SSL certificates
4. Run post-upgrade
5. Expand data disk size
6. Update tenant password
7. Exit

>**Important**: Option 3, 4 and 6 will only work after you have successfully completed the post-installation setup (Option 2). 
Option 1 and 4 cannot be invoked from a remote connection like SSH. You will have to run these directly from the terminal within the VM.

#### Option 1 - Configure network

>**Info**: This option is not required if you use VirtualBox as with VirtualBox the IP is configured out of the box in VM. You can immediately proceed with running the post-installation.

>**Important**: This task needs to be invoked from within the VM and cannot be invoked via a remote connection.

First, select the type of input you want to use.

```shell
* Enter [F] to take input from file or [C] to take input from console:
```

You have the choice to  enter the network parameters manually via the console or via a file. 

##### Console input

1. Provide the new IP address for the ethernet interface, e.g. 192.168.56.120
	
	```shell
	* Enter new IP address for ethernet interface:
	```
	
2. Provide the netmask IP for your network, e.g. 255.255.255.0
	
	```shell
	* Enter netmask:
	```

3. Provide the gateway IP for your network, e.g. 192.168.56.1
	
	```shell
	* Enter gateway IP:
	```

4. Provide the DNS Server IP for your network, e.g. 192.168.56.1
	
	```shell
	* Enter DNS Server IP:
	```
	
	>**Info**: If the DNS Server IP is unknown, you can enter the previously entered gateway IP here. If any of the network parameters are not available, contact your network administrator.

##### File input
 
Provide the absolute path of the configuration file. The network parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

```shell
* Enter existing file path containing network parameters:
```

Confirm to continue with the network configuration process.

The network configuration process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 2 - Run post-installation

First, select the type of input you want to use.

```shell
* Enter [F] to take input from file or [C] to take input from console:
```

You have the choice to enter the post-installation parameters manually via the console or via a file. 

##### Console input

1. Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

	```shell
	* Enter tenant admin username:
	```

2. Provide a new password for the “tenant admin username”. This password is later used to login to the system using the web browser. 

	```shell
	* Enter tenant admin password:
	```

	>**Info**: The password may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

3. Re-enter the previously entered password to confirm it. 

	```shell
	* Re-enter tenant admin password:
	```

4. Provide a fully qualified domain name, e.g. "myown.iot.com". The domain name must match the domain name of the SSL certificate.

	```shell
	* Enter tenant domain name:
	``` 

	>**Important**: Once configured, the domain name cannot be changed. Make sure to use the name finally desired.

5. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert", e.g. */home/admin/myown-selfsigned.crt*.

	```shell
	* Enter domain ({your-domain-name}) SSL certificate file path (*.crt|*.cert):
	```

6. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.", e.g. */home/admin/myown-selfsigned.key*.
	```shell
	* Enter domain ({your-domain-name}) SSL certificate key file path (*.key):
	```

7. Provide the absolute path of the license file. The file extension must be ".licence", e.g. */home/admin/myown.iot.com.licence*.

	```shell
	* Enter domain ({your-domain-name}) Cumulocity licence file path (*.licence):
	```
	
8. Provide the absolute path of the Software AG Apama license file. The file extension must be ".xml",  e.g. */home/admin/ApamaServerLicense101.xml*. <br> <br>This is an optional licence file, you can press [Enter] to continue without providing license.

	```shell
	* Enter Software AG Apama licence file path (optional):
	```

		
Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File Input

Provide the absolute path of the configuration file. The installation parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

```shell
* Enter existing file path containing post-installation parameters:
```

Confirm to continue with the post-installation process.

The post-installation process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 3 - Update license and SSL certificates

First, select the type of input you want to use.

```shell
* Enter [F] to take input from file or [C] to take input from console:
```

You have the choice to enter the update parameters manually via the console or via a file. 

##### Console input

1. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert", e.g. */home/admin/myown-selfsigned.crt*.

	```shell
	* Enter domain ({previously-entered-domain-name}) SSL certificate file path (*.crt|*.cert):
	```

2. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.", e.g. */home/admin/myown-selfsigned.key*.

	```shell
	* Enter domain ({previously-entered-domain-name}) SSL certificate key file path (*.key):
	```

3. Provide the absolute path of the license file. The file extension must be ".licence", e.g. */home/admin/myown.iot.com.licence*.

	```shell
	* Enter domain ({previously-entered-domain-name}) Cumulocity licence file path (*.licence):
	```
	
4. Provide the absolute path of the Software AG Apama license file. The file extension must be ".xml",  e.g. */home/admin/ApamaServerLicense101.xml*.<br> <br>This is an optional licence file, you can press [Enter] to continue without providing license.

	```shell
	* Enter Software AG Apama licence file path (optional):
	```

Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File input

Provide the absolute path of the configuration file. The update parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

```shell
* Enter existing file path containing update parameters:
```

Confirm to continue with the update process.

The update process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

#### Option 4 - Run post-upgrade

>**Important**: This task needs to be invoked from within the VM and cannot be invoked via a remote connection.

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

2. Edit the VM and on the **Virtual Hardware** tab increase the disk space of **Hard disk 2** to your needs.<br><img src="/guides/images/edge/edge-configuration-edit.png" name="Edit VMware"/> 

3. Start the VM and run the *post_installation.sh* script.

4. From the option list, select option 5, and confirm to continue with expanding the data disk size.

The disk size expanding process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

<img src="/guides/images/edge/edge-configuration-disk-size.png" name="Expand disk size"/>

#### Option 6 - Update tenant password

Provide the new password for the edge tenant. This password is later used to login to the platform via the web browser as well as to login to the management tenant using the edgeadmin user.

```shell 
* Enter new tenant admin password: 
```

>**Info**: The password may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]/

Re-enter the previously provided password to confirm it.

```shell 
* Re-enter tenant admin password:
```

Confirm to continue with updating the tenant password.

The update tenant password process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process will halt and a failure message will be displayed on the console.

>**Info**: The Cumulocity platform does not allow to use any of the last 10 previously used passwords. 