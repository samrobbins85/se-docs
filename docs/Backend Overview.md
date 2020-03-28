---
title: Backend Overview
id: backendoverview
---

## System Structure
The whole system composes of three primary components: the MongoDB Database, the Express Server (which I will also refer to as the back-end server) and any number of clients running the front-end program.

The MongoDB database is where the data describing the contents and structure of the warehouse will be stored so that it can be accessed and edited by warehouse employees. We chose to use MongoDB as it is both easily extensible and flexible. Details on the exact structure of the database can be found in the Installation section.

The express server acts as a middle-man between the clients and the MongoDB and provides a number of useful API functions to interface with the database. It provides error handling between the client and server, and between the server and the database, ensuring that the whole system remains robust and to ensure consistency. Details on how to install and deploy the express server are also in the Installation section.

## Back-end Functions
In this section I will give a brief overview of all back-end functions. 

### addTrayMany

### editTrayMany

### removeTrayMany

### getAllCategory

### getNextNExpiring

### getZones

### addZone

### editZone

### removeZone

### addBay

### editBay

### removeBay

### addTray

### editTray

### removeTray

### switchTray

### getTraysInBay

### getBaysInZone

### moveTray

### mongoUpdate

