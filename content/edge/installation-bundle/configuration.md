---
weight: 30
title: Configuration
layout: redirect
---

### Preparation

Copy the Edge license, SSL key, and SSL certificate into the Edge VM. Use WINSCP, SCP, FTP or any other file transfer tool to transfer the files from your host OS to Edge VM (Linux OS).

You can copy the files to the Edge VM folder */home/admin*. 

The files have the following extensions:

* Cumulocity IoT Edge license file: ".licence"
* SSL Key file: ".key"
* SSL Certificate: ".crt" or ".cert"

>**Important:** Do not rename the license file received from Cumulocity IoT support. Renaming the license file causes failure of the post-installation process.

### Preparing the Cumulocity IoT Edge post-installer configuration file

The post-installer configuration file is a key-value based configuration file which acts as input to the post-installation script while configuring the EDGE server.

A template of this configuration file is placed within the EDGE VM under */opt/c8y/utilities/post-installer/* as *config.dat*. In order to use this, you need to update the file with the correct values.

>**Important:** This template file is overwritten if the post-installation script is invoked and inputs are entered manually through console.
Therefore, it is advisable to copy this template file to a different location and edit the same.

The following keys are available in the configuration file:

`tenant.admin.username` : Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

`tenant.admin.password` : Provide a new password for the *tenant admin username*. This password is later used to login to the system using the web browser.

>**Info:** The password should be base64-encoded only. For example, if you want the password to be edge@123 then the encoded value ZWRnZUAxMjM= should be used in the configuration file.

>**Important:** The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

`tenant.domain.name` : Provide a fully qualified domain name. For example, "myown.iot.com". Here, you must have the Cumulocity IoT Edge license for the domain name **iot.com** or **myown.iot.com**. <br>The domain name must adhere to all the domain name validation rules as described in [Domain name validation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

>**Important:** Once configured, the domain name cannot be changed. Make sure to use the name finally desired.

`ssl.certificate` : Provide the absolute path of the SSL certificate file. The file extension should either be “.crt” or “.cert”. For example, /home/admin/myown-iot-com.crt. Make sure that the file path is valid and the file exists in the local machine.

>**Info:** The SSL certificate that you provide here must be valid for the domain name that you have provided in the previous step. 

`ssl.certificate.key` : Provide the absolute path of the SSL certificate key file. The file extension must be “.key.”. For example, /home/admin/myown-iot-com.key.
Make sure that the file path is valid and the file exists in the local machine.

>**Info:** The SSL key that you provide here must be valid for the domain name that you have provided in the previous step.

`c8y.license` : Provide the absolute path of the license file. The file extension must be “.licence”. For example, /home/admin/myown.iot.com.licence.
Make sure that the file path is valid and the file exists in the local machine.

The following parameters are required only if you want to update the network parameters in the EDGE VM. You may skip these parameters if network is already configured or it is not applicable in your case.

`network.ip` : Provide the new IP address for the ethernet interface. For example, 192.168.56.120

`netmask` : Provide the netmask IP for your network. For example, 255.255.255.0

`gateway.ip` : Provide the gateway IP for your network. For example, 192.168.56.1

`dns.server.ip` : Provide the DNS Server IP for your network. For example, 192.168.56.1. For DNS, do not use the IP addresses 10.96.0.10 and 127.0.0.1.

>**Info:** If the DNS Server IP is unknown, you can enter the previously entered gateway IP here. If any of the network parameters are not available, contact your network administrator.

### Configuring the Edge server

Once Edge VM is started, you need to run the script *post_installation.sh* to configure the Edge server. The post-installation script is available in the folder */opt/c8y/utilities*.

Post installation should only be run after the platform initialization is successful which can be checked by running below REST API: 

<img src="/images/edge/edge-check-platform.png" name="Check platform initialization"/> 

Usually the platform comes up within 2 minutes. 

1. Browse to the folder */opt/c8y/utilities*. 

	`[admin@server ~]$ cd /opt/c8y/utilities`

2. Run the following command and provide the password when prompted.

	`[admin@server ~]$ su admin`
	
	`[admin@server ~]$ Password: <Enter password for admin user>`

3. Run the script *post_installation.sh*.

	` [admin@server ~]$ sudo ./post_installation.sh`

4. Configure the network for your Edge server. See [Configuring the network](/edge/installation/#configuring-the-edge-network).
5. Perform the post-installation process. See [Running the post installation process](/edge/installation/#running-the-post-installation-process).

The Edge server configuration is complete.

### Post installation tasks

The following sections explain the tasks that can be performed using the post-installer utility:

1. [Configure network](/edge/installation/#configuring-the-edge-network)
2. [Run post-installation](/edge/installation/#running-the-post-installation-process)
3. [Update license and SSL certificates](/edge/installation/#updating-the-license-and-ssl-certificates)
4. [Run post-upgrade](/edge/installation/#running-post-upgrade)
5. [Expand disk size](/edge/installation/#expanding-the-disk-size)
6. [Update tenant password](/edge/installation/#updating-the-tenant-password)
7. [Configure Edge Agent](/edge/installation/#configuring-edge-agent)
8. [Enable microservice hosting feature](/edge/installation/#enabling-or-disabling-microservice-hosting-feature)
9. Exit

>**Important:**<br>- Option 1 is the first step that you must perform while configuring the Edge server. Also, if you change the network configuration of a Hypervisor, you must configure the network using option 1.<br>- Option 3, 4 and 6 will only work after you have successfully completed the post-installation setup (Option 2). <br>- Option 1 and 4 must be run from the Edge VM console in the hypervisor. These options cannot be invoked from a remote connection like SSH.

#### Configuring the Edge network

>**Important:** This task needs to be invoked from within the VM and cannot be invoked through a remote connection.

1. Run the post-installation script *post_installation.sh*.

2. Select the option **1. Configure network**.

3. Select the type of input you want to use.

	`* Enter [F] to take input from file or [C] to take input from console: `

You have the choice to  enter the network parameters manually through the console or through a file. 

##### Console input

1. Provide the new IP address for the ethernet interface. For example, 192.168.66.10

	`* Enter new IP address for ethernet interface:`
	
2. Provide the netmask IP for your network. For example, 255.255.255.0
	
	`* Enter netmask:`

3. Provide the gateway IP for your network. For example, 192.168.66.1
	
	`* Enter gateway IP:`

4. Provide the DNS Server IP for your network. For example, 192.168.66.1
	
	`* Enter DNS Server IP:`
	
	For DNS, do not use the IP addresses 10.96.0.10 and 127.0.0.1.
	
	>**Info:** If the DNS Server IP is unknown, you can enter the previously entered gateway IP here. If any of the network parameters are not available, contact your network administrator.

5. Provide the default Docker bridge network CIDR. For example, `172.18.0.1/16`

	`* Enter Default Docker Bridge Network CIDR (Current value: 172.17.0.1/16. Leave blank to retain the same):`

	>**Info:** Update the default Docker bridge network CIDR only if the IP address of the Edge VM is in the same network range as the Docker network. 

6. Confirm to continue with the network configuration process.

7. Restart your Edge VM.

##### File input
 
Provide the absolute path of the configuration file. The network parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

	`* Enter existing file path containing network parameters:`

Confirm to continue with the network configuration process. Restart your Edge VM after the network configuration is successful.

The network configuration process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

#### Running the post installation process

1. Run the post-installation script *post_installation.sh*.

2. Select the option **2. Run post-installation**.

3. Select the type of input you want to use.

	`* Enter [F] to take input from file or [C] to take input from console: `

You have the choice to enter the post-installation parameters manually through the console or through a file. 

##### Console input

1. Provide a new username for the tenant admin. This username is later used to login to the system using the web browser.

	`* Enter tenant admin username:`

2. Provide a new password for the “tenant admin username”. This password is later used to login to the system using the web browser. 

	`* Enter tenant admin password:`

	>**Info:** The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

3. Re-enter the previously entered password to confirm it. 

	`* Re-enter tenant admin password:`

4. Provide a fully qualified domain name. For example, "myown.iot.com". Here, you must have the Cumulocity IoT Edge license for the domain name **iot.com** or **myown.iot.com**.<br>The domain name must adhere to all the domain name validation rules as described in [Domain name validation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

	`* Enter tenant domain name:` 

	>**Important:** Once configured, the domain name cannot be changed. Make sure to use the name finally desired.

5. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert". For example, */home/admin/myown-iot-com.crt*.

	`* Enter domain ({your-domain-name}) SSL certificate file path (*.crt|*.cert):`

	>**Info:** The SSL certificate that you provide here must be valid for the domain name that you have provided in the previous step.

6. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.". For example, */home/admin/myown-iot-com.key*.
	
	`* Enter domain ({your-domain-name}) SSL certificate key file path (*.key):`

	>**Info:** The SSL key that you provide here must be valid for the domain name that you have provided in the previous step.

7. Provide the absolute path of the license file. The file extension must be ".licence". For example, */home/admin/myown.iot.com.licence*.

	`* Enter domain ({your-domain-name}) Cumulocity licence file path (*.licence):`
	
8. Provide the URL for the Cumulocity IoT tenant (cloud or on-premise) to control your Edge VM remotely. For example, "https://&lt;*tenant-domain*&gt;.cumulocity.com".

	`* Enter cloud URL (leave blank to disable remote management):` 

	You can also configure the Edge agent with the Cumulocity IoT tenant URL by running the post-installation script and selecting [Configuring Edge Agent](/edge/installation/#configuring-edge-agent).
		
Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File Input

Provide the absolute path of the configuration file. The installation parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

	`* Enter existing file path containing post-installation parameters:`

Confirm to continue with the post-installation process.

The post-installation process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

#### Updating the license and SSL certificates.

1. Run the post-installation script *post_installation.sh*.

2. Select the option **3. Update license and SSL certificates**.

3. Select the type of input you want to use.

	`* Enter [F] to take input from file or [C] to take input from console: `

You have the choice to enter the update parameters manually through the console or through a file. 

##### Console input

1. Provide the absolute path of the SSL certificate file. The file extension should either be ".crt" or ".cert". For example, */home/admin/myown-selfsigned.crt*.

	`* Enter domain ({previously-entered-domain-name}) SSL certificate file path (*.crt|*.cert):`

2. Provide the absolute path of the SSL certificate key file. The file extension must be ".key.". For example, */home/admin/myown-selfsigned.key*.

	`* Enter domain ({previously-entered-domain-name}) SSL certificate key file path (*.key):`

3. Provide the absolute path of the license file. The file extension must be ".licence". For example, */home/admin/myown.iot.com.licence*.

	`* Enter domain ({previously-entered-domain-name}) Cumulocity licence file path (*.licence):`
	
Once the input parameters are entered correctly, the parameters will be saved under 
*/opt/c8y/utilities/post-installer/config.dat* for future reference.
You can use this file for providing the input parameters to the post-installer.

##### File input

Provide the absolute path of the configuration file. The update parameters will be loaded from the file. In case of any incorrect parameters, the utility will fall back to console mode and will prompt the user to enter the parameters as described above.

	`* Enter existing file path containing update parameters:`

Confirm to continue with the update process.

The update process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

#### Running post-upgrade

>**Important:** This task needs to be invoked from within the VM and cannot be invoked through a remote connection.

>**Info:** During this process, the previously used password in the source will be validated as per Cumulocity IoT's password policy. In case the password is not compliant with the policy, the user will be prompted to enter the tenant password without which the post-upgrade task cannot be completed.

1. Run the post-installation script *post_installation.sh*.

2. Select the option **4. Run post-upgrade**.

3. Confirm to continue with the post-upgrade process.

4. Restart your Edge VM.

The post-upgrade process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

If you have configured the network in the ‘source’ version, the new configuration will be performed in the upgrade version when this task is executed.

#### Expanding the disk size

You can expand the disk size of installation disk and data disk at the same time.

1. Shutdown the VM.

2. Edit the disk size in the hypervisor. See the hypervisor specific documentation for increasing the disk size.  

3. Start the VM.

4. Run the *post_installation.sh* script.

5. Select the option **5. Expand disk size**.

6. Confirm to continue with expanding the disk size.

The disk size expansion process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

#### Updating the tenant password

The password updated using this option acts as the password for the administrators of both the tenants, that is, **admin** user of the 'edge' tenant and **edgeadmin** user of the management tenant. Using these credentials, the administrators can log in to the respective tenant through a web browser.

1. Run the post-installation script *post_installation.sh*.

2. Select the option **6. Update tenant password**.

3. Enter the new tenant password.

	`* Enter new tenant admin password:`

>**Info:** The password must have a minimum of 8 and a maximum of 32 characters and it may contain letters, numbers or any of these symbols: `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/

4. Re-enter the previously provided password to confirm it.

	`* Re-enter tenant admin password:`

5. Confirm to continue with updating the tenant password.

The update tenant password process consists of multiple steps which are executed sequentially. After a step has been executed, its status will be shown on the console. In case of any failure in any of the steps, the process halts and a failure message appears on the console.

>**Info:** The Cumulocity IoT platform does not allow to use any of the last 10 previously used passwords.

#### Configuring Edge Agent

1. Run the post-installation script *post_installation.sh*.

2. Select the option **7. Configure Edge Agent**.

3. Provide the URL for the Cumulocity IoT tenant (cloud or on-premise). For example, "https://&lt;*tenant-domain*&gt;.cumulocity.com".

	`* Enter cloud URL (leave blank to disable remote management):`

After providing the tenant URL, you have to register your Edge VM with the Cumulocity IoT tenant. For more information, see [Registering the Edge device with a Cumulocity IoT  tenant](/edge/usage/#registering-the-edge-device-with-the-cumulocity-iot-tenant).

>**Important:** If you have configured the Cumulocity IoT tenant URL during the post installation and then use this option with a blank URL, you will disable the Cumulocity IoT tenant connectivity.

#### Enabling or Disabling microservice hosting feature

>**Info:** Ensure that you have fulfilled the minimum system requirements: 4 logical CPU cores and 8 GB RAM.

If you want to use the microservice hosting feature, ensure that you do not use these IP ranges in your local network where the Edge virtual machines are configured. When you enable the microservice hosting feature, the Kubernetes system reserves these IP ranges on the Edge instances.
- 10.96.0.0/12
- 10.244.0.0/16

To enable the microservice hosting feature:

1. Run the post-installation script *post_installation.sh*.

2. Select the option **8. Enable microservice hosting feature**.

	The option 8 appears **Disable microservice hosting feature** if the microservice feature is enabled.

3. Confirm to enable the microservice feature.

When you enable or disable the microservice feature, the Device Simulator microservice also gets enabled or disabled.

After you enable the microservices, before using the microservices ensure that the microservices are active and healthy.
For more information about microservices runtime, see [Microservice runtime](/microservice-sdk/concept/#microservice-runtime).

To disable the microservice feature, run the post installer and select the option 8.
Before disabling the microservice feature, you should unsubscribe from all the microservices that have been uploaded.
You can also delete the microservice if you are not planning to enable again and subscribe to the same microservice.
For more information about developing and hosting a microservice, see [Microservices SDK](/microservice-sdk/introduction/).