---
id: getTraysInBay
title: getTraysInBay
---

Gets the trays in a given Bay
## URL
```http request
POST /stockTake/$ENDPOINT
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
An array of the trays in the bay