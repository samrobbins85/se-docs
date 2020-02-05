---
id: editTray
title: editTray
---
Edits the contents of a Tay
## URL
```http request
POST /stockTake/editTray
```

## Input
```json
{
  "zone": "Zone specified",
  "bay": "Bay specified",
  "tray": "Tray specified",
  "contents": "What is in the tray",
  "weight": "How much does it weigh",
  "expiry": "When does it expire"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone in which the tray is |
| `bay`      |   `integer`    | The bay in which the tray is|
| `tray` |   `string`    | The tray to edit|
| `contents` |   `string`    |  What is in the tray |
| `weight` |   `string`    |  The weight of the contents (give as a number in Kilos)|
| `expiry` |   `string`    |  The expiry date of the food |


## Output
`OK` if successful

`FAIL` if unsuccessful
