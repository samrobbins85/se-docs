---
title: Backend Overview
id: backendoverview
---

## System Structure
The whole system composes of three primary components: the MongoDB Database, the Express Server (which I will also refer to as the back-end server) and any number of clients running the front-end program.

The MongoDB database is where the data describing the contents and structure of the warehouse will be stored so that it can be accessed and edited by warehouse employees. We chose to use MongoDB as it is both easily extensible and flexible. Details on the exact structure of the database can be found in the Installation section.

The express server acts as a middle-man between the clients and the MongoDB and provides a number of useful API functions to interface with the database. It provides error handling between the client and server, and between the server and the database, ensuring that the whole system remains robust and to ensure consistency. Details on how to install and deploy the express server are also in the Installation section.

## Back-end Functions
In this section I will give a brief overview of all back-end functions in `routes/stockTake.js`

### addTray
When provided with a tray object and a MongoDB database object, this function will add the contents of the tray object to the database.

### editTray
When provided with a tray object and a MongoDB database object, this function will update the contents of an existing tray object in the database, provided it exists.

### removeTray
When provided with the location of a tray object and a MongoDB database object, this function will delete the tray from the database.

### switchTray
When provided with the location of two different tray objects and a MongoDB database object, this function with swap the positions of two trays in the database.

### addTrayMany
When provided with an array of tray objects and a MongoDB database object, this function will add all the tray objects to the database in a single command. This should be used if many trays are added at once, as adding them one-by-one will take an unacceptable amount of time. 

### editTrayMany
When provided with an array of tray objects and a MongoDB database object, this function will edit all the tray objects that are in the database in a single command. This should be used if many trays are edited at once, as editing them one-by-one will take an unacceptable amount of time. 

### removeTrayMany
When provided with an array of tray locations and a MongoDB database object, this function will remove all the trays at the positions specified. This should be used if many trays are deleted at once, as deleting them one-by-one will take an unacceptable amount of time. 

### getAllCategory
When provided with a category and a MongoDB database object, this function will return all trays with a matching category. This can be used to quickly obtain the locations of items of a specific type.

### getNextNExpiring
When provided with a number N, an optional category argument and a MongoDB database object, this function will return the next N expiring trays. If a category is specified, it will return the next N expiring in that category only. This can be useful if we wish to find the items closest to expiring so that we can focus on taking them from the warehouse first.

### getZones
This function, when provided with a MongoDB database object, simply returns all zones in the warehouse.

### addZone
When provided with a zone object and a MongoDB database object, the zone will be added to the database. This can be used in the initial creation of the warehouse and to add zones temporarily when there is a need to meet a higher than normal capacity.

### editZone
When provided with a zone object and a MongoDB database object, the zone in the database will be edited, provided that it does exist.

### removeZone
When provided with a zone location and a MongoDB database object, the zone will be removed from the database.

### addBay
When provided with a bay object and a MongoDB database object, the bay will be added to the database.

### editBay
When provided with a bay object and a MongoDB database object, the bay will be edited, provided it does exist.

### removeBay
When provided with the location of the bay and a MongoDB database object, the bay will be removed from the database.

### getTraysInBay
When provided with the location of a bay and a MongoDB database object, the function will return a list of all tray objects inside that bay, provided the bay exists. This will be used to display bay contents in the front-end application.

### getBaysInZone
When provided with the location of a zone and a MongoDB database object, the function will return a list of all the bay objects inside that zone, provided the zone exists.

### moveTray
When provided with two tray locations and a MongoDB database object, the function will move the tray from one location to another provided a tray exists in the start location and does not exist in the end position.

### mongoUpdate
This function takes a request body and a method code. It will first connect to the MongoDB database to get the database object. Then, using the method code, it will pass the request body to one of the functions described above. It is then responsible for handling errors that occur and returning the result to the front-end.

