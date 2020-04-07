---
id: editZone
title: editZone
---

Edit the target zone's attributes.
## URL
```http request
POST /stockTake/editZone
```

## Input
```json
{
  "zone": "Name of the zone to be altered",
  "newname": "[Optional] New Name of the zone",
  "height": "[Optional] New Height of the zone",
  "width": "[Optional] New Width of the zone"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`zone`|`string`|Target zone identifier|
|`newname`|`string`|[Optional] The new name of the zone|
|`height`|`integer`|[Optional] The new height of the zone (number of rows in the zone)|
|`width`|`integer`|[Optional] The new width of the zone (number of columns in the zone)|

## Output
`OK` if successful

`FAIL` if unsuccessful
