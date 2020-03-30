---
title: addTray
id: addTray
---
Adds a new tray to the warehouse

## URL

```http
POST /stockTake/addTray
```

## Input
```json
{
  "zone": "Zone specified",
  "bay": "Bay specified",
  "tray": "Tray specified",
  "contents": "What is in the tray",
  "weight": "How much does it weigh",
  "expiry": "When does it expire",
  "xPos": "The x position of each tray in the bay, i.e. leftmost tray has xPos = 1",
  "yPos": "The y position of each tray in the bay, i.e. bottommost tray has yPos = 1"
}
```

### Parameters
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | The zone in which the tray is |
| `bay`      |   `string`    | The bay in which the tray is|
| `tray` |   `string`    | The tray to edit|
| `contents` |   `string`    |  What is in the tray |
| `weight` |   `integer`    |  The weight of the contents (give as a number in Kilos)|
| `expiry` |   `string`    |  The expiry date of the food |
| `xPos` |   `integer`    |  The horizontal positional element of the tray within its bay |
| `yPos` |   `integer`    |  The vertical positional element of the tray within its bay |

## Output

`OK` if successful

`FAIL` if unsuccessful
