---
id: nextExpiring
title: nextExpiring
---
Get the next n expiring trays in the warehouse
## URL
```http request
POST /stockTake/nextExpiring
```

## Input
```json
{
    "n": "Top n trays to fetch"
}
```

### Parameters
| Parameter | Type | Description |
| ------ | :-------: | :------: |
| `zone` | `integer` | Number of trays to fetch |

## Output
Array of JSON Tray Objects if successful

`FAIL` if unsuccessful
