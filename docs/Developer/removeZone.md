---
id: removeZone
title: removeZone
---

Removes a zone from the warehouse
## URL
```http request
POST /stockTake/removeZone
```

## Input
```json
{
    "zone": "The zone to remove"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `zone`    | `string` | The identifier of the zone you want to remove

## Output
`OK` if successful

`FAIL` if unsuccessful
