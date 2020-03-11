---
id: getAllCategory
title: getAllCategory
---
Get all trays that contain the specified item
## URL
```http request
POST /stockTake/getAllCategory
```
## Input
```json
{
    "contents", "Optional, only get trays that match these contents"
}
```
### Parameters
| Parameter | Type | Description |
| ------ | :-------: | :------: |
| `contents` | `string` | String matching the contents of some tray in the warehouse|

## Output
Array of JSON Tray Objects if successful

`FAIL` if unsuccessful
