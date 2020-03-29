---
id: editBay
title: editBay
---

Edit the attributes of a bay.
## URL
```http request
POST /stockTake/editBay
```

## Input
```json
{
  "bay": "Bay Name",
  "zone": "Zone Name",
  "xVal": "New x Position of bay in zone",
  "yVal": "New y Position of bay in zone",
  "xSize": "New x Size of the bay",
  "ySize": "New y Size of the bay"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`bay`|`string`|Name of the bay being amended|
|`zone`|`string`|Zone identifier of zone the bay is in|
|`xVal`|`integer`|x Position of the bay within the given zone|
|`yVal`|`integer`|y Position of the bay within the given zone|
|`xSize`|`integer`|x size of the bay (number of columns for trays)|
|`ySize`|`integer`|y size of the bay (number of rows for trays)|

## Output
`OK` if successful

`FAIL` if unsuccessful
