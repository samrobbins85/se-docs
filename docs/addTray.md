---
id: addTray
title: addTray
---

Adds a new tray to the warehouse
## URL
```http request
POST /stockTake/addTray
```

## Input
```json
{
  "zone": "Relevant zone",
  "bay": "Relevant bay",
  "tray": "Relevant tray",
  "xPos": "Relevant x position in bay",
  "yPos": "Relevant y position in bay"
}
```

### Parameters 
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | A valid zone in the warehouse |
| `bay`      |   `string`    |  A valid bay in the warehouse |
| `tray` |   `string`    |   The tray you want to add |
| `xPos` |   `integer`    |   The horizontal positional element of the tray within its bay |
| `yPos` |   `integer`    |   The vertical positional element of the tray within its bay |


## Output
`OK` if successful

`FAIL` if unsuccessful
