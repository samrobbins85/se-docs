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
|`zone`|`string`|Zone identifier of zone the bay is in|
|`xVal`|`integer`|x Position of the bay within the given zone|
|`yVal`|`integer`|y Position of the bay within the given zone|
|`xSize`|`integer`|x size of the bay (number of columns for trays)|
|`ySize`|`integer`|y size of the bay (number of rows for trays)|

Use xVal and yVal to specify the target bay (rather than its identifier)

## Output
`OK` if successful

`FAIL` if unsuccessful
