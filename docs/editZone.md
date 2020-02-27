---
id: editZone
title: editZone
---

Edit the target zone's attributes
## URL
```http request
POST /stockTake/editZone
```

## Input
```json
{
  "zone": "Zone identifier",
  "height": "New Height of the zone",
  "width": "New Width of the zone"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`zone`|`string`|Target zone identifier|
|`height`|`integer`|The new height of the zone (number of rows in the zone)|
|`width`|`integer`|the new width of the zone (number of columns in the zone)|

## Output
`OK` if successful

`FAIL` if unsuccessful
