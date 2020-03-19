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
    "n": "Top n trays to fetch",
    "contents", "Optional, only get trays that match these contents"
}
```

### Parameters
| Parameter | Type | Description |
| ------ | :-------: | :------: |
| `n` | `integer` | Number of trays to fetch |
| `contents` | `string` | String matching the contents of some tray in the warehouse|

## Output
Array of JSON Tray Objects if successful

`FAIL` if unsuccessful
