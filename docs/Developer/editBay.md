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
  "xVal": "[Optional] New x Position of bay in zone",
  "yVal": "[Optional] New y Position of bay in zone",
  "xSize": "[Optional] New x Size of the bay",
  "ySize": "[Optional] New y Size of the bay"
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|`bay`|`string`|Name of the bay being amended|
|`zone`|`string`|Zone identifier of zone the bay is in|
|`xVal`|`integer`|[Optional] x Position of the bay within the given zone|
|`yVal`|`integer`|[Optional] y Position of the bay within the given zone|
|`xSize`|`integer`|[Optional] x size of the bay (number of columns for trays)|
|`ySize`|`integer`|[Optional] y size of the bay (number of rows for trays)|

## Output
`OK` if successful

`FAIL` if unsuccessful
