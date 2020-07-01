---
weight: 150
title: Inventory role
layout: redirect
---

### InventoryRole [application/vnd.com.nsn.cumulocity.inventoryrole+json]

|Name|Type|Occurs|Description|Mandatory for POST/PUT|
|:---|:---|:-----|:----------|:----------:|
|id|string|1|Uniquely identifies an inventory role.|No/Yes|
|name|string|1|Descriptive name of the inventory role.|Yes/No|
|description|string|1|Details of the capabilities of the role.|No|
|self|string|1|A URI linking to this resource.|No|
|permissions|array|0..n|List of permissions that can be attached to group of devices.|No|

### Retrieve an inventory role

Required role: ROLE_USER_MANAGEMENT_READ or ROLE_USER_MANAGEMENT_CREATE and the user has the inventory role assigned

Response body: InventoryRole

Example request:

```http
GET /user/inventoryroles/{id}
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
```

Example response:

```json
{
    "name": "Reader",
    "description": "Can read all data of the asset.",
    "self": "[URL to this resource]",
    "id": 10,
    "permissions": [
        {
            "permission": "READ",
            "id": 11,
            "type": "*",
            "scope": "*"
        }
    ]
}
```

### Update an inventory role

Required role: ROLE_USER_MANAGEMENT_ADMIN

Request body: InventoryRole

Response body: InventoryRole

Example request:

```http
PUT /user/inventoryroles/{id}
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
Content-Type: application/vnd.com.nsn.cumulocity.inventoryrole+json

{
    "description": "Grants read access to the asset's data."
}
```

Example response:

```json
{
    "name": "Reader",
    "description": "Grants read access to the asset's data.",
    "self": "[URL to this resource]",
    "id": 10,
    "permissions": [
        {
            "permission": "READ",
            "id": 11,
            "type": "*",
            "scope": "*"
        }
    ]
}
```

### Delete an inventory role

Required role: ROLE_USER_MANAGEMENT_ADMIN

Example request:

```http
DELETE /user/inventoryroles/{id}
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
```
