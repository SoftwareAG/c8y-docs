---
weight: 140
title: Inventory role collection
layout: redirect
---

### InventoryRoleCollection [application/vnd.com.nsn.cumulocity.inventoryrolecollection+json]

|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|roles|array|0..n|List of roles.|
|statistics|object|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional roles.|
|next|string|0..1|A URI linking to a possible next page with additional roles.|

### Get all available inventory roles

Required role: ROLE_USER_MANAGEMENT_READ or ROLE_USER_MANAGEMENT_CREATE

Response body: InventoryRoleCollection

Example request:

```http
GET /user/inventoryroles
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
```

Example response:

```json
{
    "self": "[URL to this resource]",
    "statistics": {
        "totalPages": 1,
        "currentPage": 1,
        "pageSize": 5
    },
    "roles": [
        {
            "name": "Manager",
            "description": "Can read all data of the asset and manage all inventory data, but cannot perform operations. Can also acknowledge and clear alarms. Can create and updates dashboards.",
            "self": "[URL to this resource]",
            "id": 2,
            "permissions": [
                {
                    "permission": "READ",
                    "id": 1,
                    "type": "*",
                    "scope": "*"
                },
                {
                    "permission": "ADMIN",
                    "id": 2,
                    "type": "*",
                    "scope": "MANAGED_OBJECT"
                },
                {
                    "permission": "ADMIN",
                    "id": 3,
                    "type": "*",
                    "scope": "ALARM"
                }
            ]
        },
        {
            "name": "Operations: Restart Device",
            "description": "Can restart devices.",
            "self": "[URL to this resource]",
            "id": 4,
            "permissions": [
                {
                    "permission": "READ",
                    "id": 5,
                    "type": "*",
                    "scope": "MANAGED_OBJECT"
                },
                {
                    "permission": "READ",
                    "id": 7,
                    "type": "c8y_Restart",
                    "scope": "OPERATION"
                },
                {
                    "permission": "ADMIN",
                    "id": 6,
                    "type": "c8y_Restart",
                    "scope": "OPERATION"
                }
            ]
        }
    ]
}
```

### Assign a new inventory role

Required role: ROLE_USER_MANAGEMENT_ADMIN

Request body: InventoryRole

Response body: InventoryRole

Example request:

```http
POST /user/inventoryroles
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
Content-Type: application/vnd.com.nsn.cumulocity.inventoryrole+json

{
    "name": "Reader",
    "description": "Can read all data of the asset.",
    "permissions": [
        {
            "permission": "READ",
            "type": "*",
            "scope": "*"
        }
    ]
}
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
