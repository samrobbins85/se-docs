---
id: removeBay
title: removeBay
---

Removes a bay from the warehouse.
## URL
```http request
POST /stockTake/removeBay
```

## Input
```json
{
  "zone": "Zone that the bay is in",
  "bay": "The bay to remove"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`zone`|`string`|Zone identifier of the zone the bay is in|
|`bay`|`string`|Bay identifier of the bay to remove|

## Output
`OK` if successful

`FAIL` if unsuccessful
