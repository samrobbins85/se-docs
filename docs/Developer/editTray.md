---
id: editTray
title: editTray
---
Edits the contents of a tray  
The only required fields are the zone, bay and tray name; as well as any fields that are being edited.
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
  "contents": "[Optional] What is in the tray",
  "weight": "[Optional] How much does it weigh",
  "expiry": "[Optional] When does it expire",
  "xPos": "[Optional] Change the x position of each tray in the bay, i.e. leftmost tray has xPos = 0",
  "yPos": "[Optional] Change the y position of each tray in the bay, i.e. topmost tray has yPos = 0"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone in which the tray is |
| `bay`      |   `string`    | The bay in which the tray is|
| `tray` |   `string`    | The tray to edit|
| `contents` |   `string`    |  [Optional] What is in the tray |
| `weight` |   `integer`    |  [Optional] The weight of the contents (give as a number in Kilos)|
| `expiry` |   `string`    |  [Optional] The expiry date of the food |
| `xPos` |   `integer`    |  [Optional] The horizontal positional element of the tray within its bay |
| `yPos` |   `integer`    |  [Optional] The vertical positional element of the tray within its bay |


## Output
`OK` if successful

`FAIL` if unsuccessful
