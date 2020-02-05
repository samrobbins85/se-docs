---
id: removeTray
title: removeTray
---

Removes a tray from the warehouse
## URL
```http request
POST /stockTake/removeTray
```

## Input
```json
{
  "zone": "Zone the tray is in",
  "bay": "Bay the tray is in",
  "tray": "The tray to remove"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone the tray you want to remove is in |
| `bay`      |   `string`    | The bay the tray you want to remove is in|
| `tray` |   `string`    |  The tray you want to remove|

## Output
`OK` if successful

`Fail` if unsuccessful