---
id: getTraysInBay
title: getTraysInBay
---

Gets all of the trays in a specified bay.
## URL
```http request
POST /stockTake/getTraysInBay
```

## Input
```json
{
  "zone": "Specified zone",
  "bay": "Specified bay"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone you want info about |
| `bay`      |   `string`    |  The bay you want info about|

## Output
An array of the trays in the bay.
