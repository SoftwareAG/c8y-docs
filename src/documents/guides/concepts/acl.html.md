Inventory-based permissions
---------------------------

This feature enhances the authorization model of Cumulocity. It enables an administrator to restrict user permissions to a subset of assets and devices. It also permits to extend permissions beyond the default "read" and "admin".

User permissions:
------------------
To add new device permission to user, go to Administration -> Users and select the user you want to edit.

Group permissions:
------------------
To add new device permission to group, go to Administration -> User Groups and select the group you want to edit. If a user is in a user group with an additional permission, that permission applies to the user.

Hierarchy permissions:
----------------------
Permissions apply to the managed object that they are attached including its children, regardless of the children type.

Device permission structure:
----------------------------

[API:fragment_name:permission] where:

1. API is one of the following values: "OPERATION", "ALARM", "AUDIT", "EVENT", "MANAGED_OBJECT", "MEASUREMENT" or "*"
2. fragment name is any fragment name, e.g. "c8y_Restart" or "*"
3. permission is "ADMIN", "READ" or "*"

Required permission per HTTP-method:
------------------------------------
+ POST - "ADMIN" or "*"
+ PUT - "ADMIN" or "*"
+ DELETE - "ADMIN" or "*"
+ GET - "READ" or "*"

"*" is a wildcard. It enables you to access every API and CRUD objects regardless of fragments that are inside it. 

Querying collections:
---------------------
Only objects that user is allowed to see are returned to the user. It is possible to query next page using next link from page statistics. It is important to note that in this case "currentPage" field represents the offset instead of actual page number.  

Important:
----------
If an object does not have any fragment in it, then to e.g. read that object you have to put a wildcard to fragment name part of device permission, i.e.
"10200":["MEASUREMENT:*:READ"]

Example:
--------
There is a user named "Tom" that does not have any roles assigned to him. When he tries to access a resource he gets 403 Forbidden. Now let's suppose we want to allow Tom to read measurement from temperature sensor that he has at his home. Administrator registered that sensor in Cumulocity. It has an id "10200". 

To allow Tom to read all measurements from device "10200" administrator would have to add the following permission to Tom's "devicePermissions" list:

+ "10200":["MEASUREMENT:c8y_TemperatureMeasurement:READ"]

If Tom would also want to read other types of measurements the sensor, then following permission is required:

+ "10200":["MEASUREMENT:*:READ"]

If Tom would like to read all measurements and also send a command to the sensor to restart itself, then the permission would be:

+ "10200":["MEASUREMENT:c8y_TemperatureMeasurement:READ","OPERATION:c8yRestart:ADMIN"]
