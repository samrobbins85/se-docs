---
title: getBaysInZone
id: getBaysInZone
---
Gets an array of all the bays in a specified zone

## URL

```http
POST /stockTake/getZone
```

## Input

```json
{
  "zone": "Target zone identifer",
}
```

### Parameters

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `zone`    | `string` | The name of the zone containing the bays we wish to retrieve |

## Output

An array of trays is returned if successful

`FAIL` if unsuccessful