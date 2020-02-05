---
id: switchTray
title: switchTray
---

Switches the position of two trays
## URL
```http request
POST /stockTake/switchTray
```

## Input
```json
{
  "first": {
    "zone": "Zone ID",
    "bay": "Bay ID",
    "tray": "Tray ID"
  },
  "second": {
    "zone": "Zone ID",
    "bay": "Bay ID",
    "tray": "Tray ID"
  }
}
```

### Parameters
| Parameter | Type | Description |
| --------- | :--: | :---------: |
|first|JSON Object|The position of the first tray to swap|
|second|JSON Object|The position of the second tray to swap|

## Output
`OK` if successful

`Fail` if unsuccessful
