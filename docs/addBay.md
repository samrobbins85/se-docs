---
id: addBay
title: addBay - WIP
---

Adds a new bay to the warehouse
## URL
```http request
POST /stockTake/addBay
```

## Input
```json
{
  "bay": "Bay Name",
  "zone": "Zone Name",
  "xVal": "x Position of bay in zone",
  "yVal": "y Position of bay in zone",
  "xSize": "x Size of the bay",
  "ySize": "y Size of the bay"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`bay`|`string`|Bay identifier string|
|`zone`|`string`|Zone identifier of zone the bay is in|
|`xVal`|`integer`|x Position of the bay within the given zone|
|`yVal`|`integer`|y Position of the bay within the given zone|
|`xSize`|`integer`|x size of the bay (number of columns for trays)|
|`ySize`|`integer`|y size of the bay (number of rows for trays)|

## Output
`OK` if successful

`FAIL` if unsuccessful
