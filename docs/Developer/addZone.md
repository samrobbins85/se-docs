---
id: addZone
title: addZone
---

Adds a new zone to the warehouse.
## URL
```http request
POST /stockTake/addZone
```

## Input
```json
{
  "zone": "Name of the zone to be added",
  "height": "Height of the zone",
  "width": "Width of the zone"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone you want to add |
| `height`      |   `integer`    |  The height you want the zone to be|
| `width` |   `integer`    |  The width you want the zone to be|

## Output
`OK` if successful

`FAIL` if unsuccessful
