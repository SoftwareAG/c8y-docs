---
weight: 25
title: Accessing Cumulocity IoT Edge
layout: redirect
---

Before you can access {{< product-c8y-iot >}} Edge, you must first get the external IP address. The Edge Operator creates a load balancer service named **cumulocity-core**, which receives an external IP. Clients outside of the cluster can access the {{< product-c8y-iot >}} Edge through this external IP. 

### Assigning an external IP

To get the external IP to access {{< product-c8y-iot >}} Edge, run the command below:
```shell
kubectl get service cumulocity-core -n c8yedge
```
{{< c8y-admon-info >}}
Substitute the namespace name *c8yedge* in the command above with the specific namespace name you have specified in your Edge CR. 
{{< /c8y-admon-info >}}

Sample output of the `kubectl get service` command:

```text
NAME              TYPE           CLUSTER-IP          EXTERNAL-IP   PORT(S)                                      AGE 
cumulocity-core   LoadBalancer   X.X.X.X **REDACTED  <pending>     443:31342/TCP,1883:32751/TCP,8883:32270/TCP  12m  
```
Sometimes the external IP displays as `<pending>` or `<none>`. The IP assignment process is dependent on the Kubernetes hosting environment. An external load balancer in the hosting environment handles the IP allocation and any other configurations necessary to route the external traffic to the Kubernetes service. Most on-premise Kubernetes clusters do not have external load balancers that can dynamically allocate IPs. The most common solution is to manually assign an external IP to the service. This can be done in the service’s YAML configuration. You can use the following command to manually assign an external IP to the `cumulocity-core` service (replace `<EXTERNAL-IP>` in the command below with the IP address you want to assign). 

```shell
kubectl patch service cumulocity-core -n c8yedge -p '{"spec":{"type": "LoadBalancer", "externalIPs":["<EXTERNAL-IP>"]}}'
```
{{< c8y-admon-info >}}
Substitute the namespace name *c8yedge* in the command above with the specific namespace name you have specified in your Edge CR. 
{{< /c8y-admon-info >}}

{{< c8y-admon-info >}}
When manually assigning the external IP, see the following Kubernetes API documentation: 

"These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP."
{{< /c8y-admon-info >}}

You can access {{< product-c8y-iot >}} Edge using a domain name in a web browser.

### Accessing Cumulocity IoT Edge using the domain name

Access {{< product-c8y-iot >}} Edge using the domain name configured as part of the installation. There are two ways of configuring the accessibility with the domain names:

* Add an entry of the domain name and IP address mapping in the DNS servers.
<br>For example, if your domain name is **myown.iot.com**, add an entry for both **myown.iot.com** and **management.myown.iot.com**.<br>
* Alternatively, [Add the alias](#add-alias) to access {{< product-c8y-iot >}} Edge through the domain name provided during installation. This must be performed on each client host on which {{< product-c8y-iot >}} Edge is accessed.

The first option is always preferable so that {{< product-c8y-iot >}} Edge is accessible over LAN.

{{< c8y-admon-important >}}
{{< product-c8y-iot >}} Edge is installed with the admin user "admin" and password "admin-pass". Change the password on first login.
{{< /c8y-admon-important >}}

#### Adding the alias {#add-alias}

On Linux machines, add the following entry to */etc/hosts*:

```text
<IP address> <domain_name>
<IP address> management.<domain_name>
```
Use the external IP address fetched by running the command `kubectl get service` in the previous section.

On Windows machines, add the same entry to *C:\Windows\System32\drivers\etc\hosts*.

Ping the &#60;domain_name> to verify it.

```shell
[admin@iot-edge-server ~]$ ping <domain_name>
[admin@iot-edge-server ~]$ ping management.<domain_name>
```

If the ping is successful, the DNS resolution is working properly.

#### To access Cumulocity IoT Edge

Enter one of the following URLs in the browser:
* `https://<domain_name>`
* `https://management.<domain_name>`

The login screen appears. If this is your first login, log in with user "admin" and password "admin-pass" and change the password.

{{< c8y-admon-important >}}
After a successful deployment, you must access both the {{< management-tenant >}} and {{< product-c8y-iot >}}  Edge tenants and change the admin credentials.
{{< /c8y-admon-important >}}

- To log in to the {{< management-tenant >}}, use the URL `https://management.<domain_name>`.

- To log in to the edge tenant, use the URL `https://edge.<domain_name>`.

If you are logging in for the first time, you will see a cookie banner at the bottom:

![Login prompt](/images/users-guide/getting-started/getting-started-cookie-banner.png)

{{< c8y-admon-info >}}
The cookie banner is turned on by default on the {{< product-c8y-iot >}} Edge instances. This feature can be configured, see [{{< enterprise-tenant >}} > Customizing your platform > Branding](/users-guide/enterprise-tenant/#branding).
{{< /c8y-admon-info >}}

* Click **Agree and Proceed** to accept the default cookie settings (required and functional cookies enabled).
* Click **Reject all** to reject all of the default cookie settings.
* Click **Preferences** to select your individual cookie preferences:
	* **Required** - Required to enable core site functionality. They perform a task or operation without which a site's functionality would not be possible. Required cookies cannot be disabled.
	* **Functional** - Used to track site usage and to process personal data to measure and improve usability and performance. Functional cookies must be actively enabled.
* Click **See also our Privacy Notice** to open the [{{< company-sag >}} privacy statement]({{< link-sag-privacy-statement >}}) with details on the {{< company-sag >}} privacy policy.

{{< c8y-admon-info >}}
If you have enabled functional cookies you can opt out of the product experience tracking later on via the **User settings** dialog, see [User options and settings](/users-guide/getting-started/#user-settings).
{{< /c8y-admon-info >}}

Select the **Remember me** checkbox if you want the browser to remember your credentials, so that you do not have to enter them again when opening the application the next time. This is especially convenient if you frequently switch between {{< product-c8y-iot >}} applications, as {{< product-c8y-iot >}} Edge requests you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explicitly logging out.

Finally, click **Login** to enter {{< product-c8y-iot >}} Edge. Initially, you will be taken to the [Cockpit](/users-guide/cockpit) application (if not configured differently).

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

To explicitly log out, click the **User** button at the right of the top bar, then select **Logout** from the context menu.

{{< c8y-admon-info >}}
The maximum number of failed logins (due to invalid credentials), after which a user is locked, can be configured by the {{< management-tenant >}} on platform level, see *{{< product-c8y-iot >}} Core - Operations guide*. The default value is 100.
{{< /c8y-admon-info >}}

### How to reset your password

To reset your password, you must first configure the "reset password" template and email server settings in {{< product-c8y-iot >}} Edge. For information about configuring the email server, see [Configuring the email server](/edge/configuration/#configuring-email-server).  

For information about resetting the password, see [To change your password](/guides/get-familiar-with-the-ui/user-settings/#to-change-your-password).

### How to access pages using URLs

For information about accessing pages using the URLs, see [To access pages using URLs](/guides/get-familiar-with-the-ui/platform-access/#to-access-pages-using-urls).
