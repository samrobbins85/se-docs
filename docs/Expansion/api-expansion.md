---
id: api-expansion
title: API Expansion
---
Once the handover has been completed, you may wish to add your own API endpoints to expand the functionality of the application further. In this document I will detail how to do this. This document is aimed towards technical users who have some experience with javascript before.

## Writing Back-end Functions
Most of the back-end functions are written so that they can be tested with only a connection to a MongoDB server (No connection to the front end required). Connections with the front end and MongoDB server are handled by other functions in `routes/stockTake.js`, so when writing back-end functions we can assume that we have an existing connection to a MongoDB server and that some other function will handle communicating the result to the front end.

With this in mind, all the back-end functions take parameters `body` and `dbo` only, where `body` is a JSON object representing the request body and `dbo` is a MongoDB database object. The parameters of `body` will depend on the function being implemented. When writing new back-end functions, it is a good idea to emulate this, however it is not enforced.

Back-end functions are typically in the following format:
```javascript

async function functionName(body, dbo) {
    // Check if the body is well formed
    if (!checkBody(body)) {
        return "FAIL";
    }

    try {
        // Build a request if the request is more complicated
        let req = buildRequest(body);

        // Call one, or many MongoDB functions
        let res = await dbo.collection("food").someMongoDBFunction(req);

        // Handle the response, returning "FAIL" if necessary
        handleResponse(res);

    } catch (ex) {
        return "FAIL";
    }

    // either return "SUCCESS" or some data that was requested.
    return "SUCCESS";
}
```

For most cases this rough structure will be sufficient. The function must return either "FAIL", "SUCCESS" or the requested data in order to be handled correctly by its calling functions.

## Routing Requests
Within `routes/stockTake.js` there is a function called `mongoUpdate` that handles the calling of the created back-end functions, as well as the connection to the MongoDB server. It also handles the returning of data and error codes to the correct API endpoint. In order to use this for your new function, you will need to add an entry to the switch statement contained within this file.

This is simple to do, add the following code:
```javascript

switch "functionID":
    code = await functionName(body, dbo);
    break;

```

to the switch statement.

The next step is to add a new router endpoint. This differs depending on what type of function you have implemented.

### Functions that get something with no parameters
```javascript
router.get('/functionEndpoint', async function (req, res, next) {
    let result = await mongoUpdate(req.body, "functionID");
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({'result': result});
})
```

### Functions that get something with parameters
```javascript
router.post('/functionEndpoint', async function (req, res, next) {
    let result = await mongoUpdate(req.body, "functionID");
    res.setHeader('Content-Type', "application/json");
    res.status(200).send({'result': result});
})
```

### Functions that make changes and only expect success/failure as result
```javascript
router.post('/functionEndpoint', async function(req, res, next) {
    let code = await mongoUpdate(req.body, "functionID");
    if (code !== "SUCCESS") {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
})
```

Your back-end function should now be able to serve requests from the client.

## Making Requests

We now need to add the end-point we have created to the public API so we can access it from the front-end server. The code for accessing the existing endpoints is in `public/api.js`. When this is imported by a front end program or part of the html of a website the functions can be called from there.

API functions are less strictly formatted compared to the back-end functions and can take any number of parameters. They should be written in a way that assists the developer when writing code by abstracting the awkward nature of hand writing JSON bodies.

Typically, the API functions should follow the following structure:

```javascript

async function functionName(arg_1, arg_2, ..., arg_n) {
    let req = buildBody(arg_1, arg_2, ..., arg_n);
    let res = await fetch(URL + functionEndpoint, {
        method: 'GET or POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });

    if (res.ok) {
        return "OK";
    }
    return "FAIL";
}
```

## Recompiling
Javascript is a scripting language and does not require recompiling after changes have been made. However, changes to the back-end will require a restart of the back-end server before the changes will be reflected. Changes will also need to be redeployed to whatever hosting service you have chosen to use.

## Additional Information
The above information should allow technical users to make simple changes to the back-end so they can add their own features. For more complex changes, you should consult the MongoDB documentation (for communication with the MongoDB database) and the express server and node documentation (for communication between the front and back end).

