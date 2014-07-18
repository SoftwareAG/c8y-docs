This API is currently in a closed beta program. If you would like to participate in the beta program, please mail us at support@cumulocity.com.

The vending interface consists of the following parts:

-   The *sales* resource reports on sales transactions for vending machines.
-   The *vouchers* resource enables submitting vouchers to vending machines and querying their status.
-   The *planogram* resource queries planograms for vending machines that define the next planned configuration of a vending machine.

# General response format

Deviating from the general error handling, responses from vending are provided in the following format:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|responseCode|Number|1|A status code signalling error conditions. "0" means no error.|
|message|String|0..1|An optional message describing an error situation.|
|value|Object|0..1|The requested data (see sales, voucher, planogram below).|

# Sales

## Sales [application/json]

A sales report is structured as follows:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|machine|String|1|The ID of the vending machine.|
|date|String|1|The date and time of the sales transactions.|
|slots|Array|1|An array of machine slots, see below.|

A slot is structured as follows:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|slotId|String|1|The ID of a vending machine slot.|
|product|String|1|The product sold in the slot.|
|price|Number|1|The price of the product sold in the slot.|
|itemsLeft|Number|1|Number of items in stock.|
|salesSinceRefill|Number|1|Number of sales since the last refill.|
|capacity|Number|1|Capacity of the slot.|
|sales|Number|1|Sales count for the reported period.|
|cash|Number|1|Cash sales for the reported period.|

## GET a sales report

Query parameters:

|Name|Type|Required|Description|
|:---|:---|:-------|:----------|
|machine|String|1|The ID of a vending machine.|
|date|String|1|Date for sales report.|
|dateTo|String|0..1|In conjunction with "date", specifies a date range for the asles report.|
|slot|String|0..1|A specific vending machine slot to query.|

Response body: Sales

Example request:

    GET /vendme-api/machine/sales?machine=VND1039230-10&date=2012-09-05T13:15:30Z&slot=01

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...
    {
      ).
            replaceAll("”",responseCode”: 0,
      ).
            replaceAll("”",value”: {
        ).
            replaceAll("”",machine”: ).
            replaceAll("”",VND1039230-10”,
        ).
            replaceAll("”",date”: ).
            replaceAll("”",2012-09-05T00:00:00Z”,
        ).
            replaceAll("”",slots”: [ {
          ).
            replaceAll("”",slotId”: ”11”,
          ).
            replaceAll("”",product”: ”Gummibaerchen”,
          ).
            replaceAll("”",price”: 0.05,
          ).
            replaceAll("”",itemsLeft”: 16,
          ).
            replaceAll("”",salesSinceRefill”: 0,
          ).
            replaceAll("”",capacity”: 16,
          ).
            replaceAll("”",sales”: 0,
          ).
            replaceAll("”",cash”: 0.0
        }, {
          ).
            replaceAll("”",slotId”: ”12”,
          ).
            replaceAll("”",product”:  ”Small PostIt”,
          ...
        },
        ...
        ]
      }
    }

# Voucher

## Voucher [application/json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|machine|String|1|The ID of a vending machine.|
|slot|String or Array|0..1|ID of a slot in the vending machine, or list of slot IDs. If not specified, voucher is submitted to all slots in the machine.|
|value|Number|0..1|Voucher value. If not specified, but slot is provided, the value will be the planogram value for the slot. If a voucher value is not submitted and a set of slots is provided or no slot is provided, then the voucher value will be the maximum value of the slot set.|

## POST - Submit a voucher

Request body: Voucher

Response body: Operation ID

Example request:

    POST /vendme-api/voucher
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json

    {
         ).
            replaceAll("”",machine”: ).
            replaceAll("”",VND1039230-10”,
         ).
            replaceAll("”",slot”: [ ).
            replaceAll("”",1”, ).
            replaceAll("”",2” ],
         ).
            replaceAll("”",value”:  1.00    
    }

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/json
    Content-Length: ...

    {
      ).
            replaceAll("”",responseCode”: 0,
      ).
            replaceAll("”",message”: ).
            replaceAll("”",message string”,
      ).
            replaceAll("”",value”: { ).
            replaceAll("”",operation”: ).
            replaceAll("”",14553”  }
    }
