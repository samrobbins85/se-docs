---
id: editTrayMany
title: editTrayMany
---
Add many trays in a single request 
## URL
```http request
POST /stockTake/editTrayMany
```

## Input
```
    Array of tray objects as described in editTray
```

## Output
`SUCCESS` if all trays edited successfully

`FAIL` if unsuccessful
