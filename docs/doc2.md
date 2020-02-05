---
id: doc2
title: AddTray
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
  "tray": "Relevant tray"
}
```

### Parameters 
| Parameter        |      Type     |   Description |
| ------------- | :-----------: | :-----: |
| `zone`     | `string` | A valid zone in the warehouse |
| `bay`      |   `string`    |  A valid bay in the warehouse |
| `tray` |   `string`    |   The tray you want to add |


## Output
`OK` if successful

`Fail` if unsuccessful
