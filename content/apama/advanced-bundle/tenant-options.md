---
weight: 16
title: Changing the tenant options
layout: redirect
---

You can customize the settings of Apama EPL Apps and Apama Analytics Builder by sending REST requests to Cumulocity IoT to change the relevant tenant options. See also [Tenants](/reference/tenants/) in the *Reference guide*.

The key names that you can use with the REST requests are listed in [Keys for Apama EPL Apps](#keys) and in the Apama Analytics Builder documentation under [Configuration](https://documentation.softwareag.com/onlinehelp/Rohan/Analytics_Builder/pab10-6/apama-pab-webhelp/index.html#page/apamaanalyticsbuilder-webhelp%2Fco-AnaBui_configuration.html).

A category name is needed along with the key name; this is either `apama` for Apama EPL Apps or `analytics.builder` for Apama Analytics Builder.

You can find some concrete examples under [Using curl commands for setting various tenant options](#curl). However, you can use any tool you like. 

To change the tenant options, you need ADMIN permission for "Option management" in Cumulocity IoT. See [Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide* for more information.

> **Info:** After you have changed a tenant option using a REST request, the Apama correlator will automatically restart. 

### <a name="keys"></a>Keys for Apama EPL Apps

The category name that is to be used with the key names listed below is always `apama`.

<table>
<colgroup>
    <col style="width: 30%;">
    <col style="width: 70%;">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Key name</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">measurementFormat</td>
<td style="text-align:left">The measurement format. Possible values are <code>MEASUREMENT_ONLY</code> (default) and <code>BOTH</code>. See <a href="#measurement-fragments">Measurement fragments</a> for more information.</td>
</tr>
</tbody>
</table>

### <a name="curl"></a>Using curl commands for setting various tenant options

You can set or change various tenant options by sending POST requests to Cumulocity IoT. The information below explains how you can do this using the curl command-line tool. See [https://curl.haxx.se/](https://curl.haxx.se/) for detailed information on curl. 

The syntax of the curl command depends on the environment in which you are working. The syntax for a Bash UNIX shell, for example, is as follows:

```
curl --user <username> -X POST -H 'Content-Type: application/json' -d '{"category": "<categoryname>", "key": "<keyname>", "value": "<value>"}' -k https://<hostname>/tenant/options
```

where:

- `<username>` is the name of a user who has ADMIN permission for "Option management" in Cumulocity IoT. curl will prompt for a password. Or you can provide a password in the `<username>` argument by appending it with a colon (:) and the password. For example:

    `--user User123:secretpw`
    
    If your tenant does not have its own unique host name, you have to provide the tenant identifier in the `<username>` argument. For example:
    
    `--user management/User123`
    
    or
    
    `--user t12345/User123`


- `<categoryname>` is either `apama` or `analytics.builder`.
- `<keyname>` is one of the keys listed above or in the Apama Analytics Builder documentation.
- `<value>` is the value that is to be set for the key, which can be a number or a string, depending on the key.
- `<hostname>` is the host name of your tenant where your user application is deployed.

For example (Bash shell):

```
curl --user User123 -X POST -H 'Content-Type: application/json' -d '{"category": "apama", "key": "measurementFormat", "value": "BOTH"}' -k https://mytenant/tenant/options
```

