=========================================================
Backend
=========================================================


In our handover there is a folder named ``backend``, in this is stored
the server that manages the requests made in the website. It is built
using Node.js and Express and can be started with ``npm install``
followed by ``npm start``, the server will then be hosted on port
**3001**

Note that the frontend and backend should be run in separate terminal windows.

When both the front end have been started, requests can be made between
them 

Deployment
-----------

Our recommendation for deploying this is on
`heroku <https://www.heroku.com/>`__ as it has a good free tier and has
suitable pricing plans for expanding if usage increases.

It is also simple to set up:

1. Create an account `here <https://signup.heroku.com/>`__
2. Click the new button on your dashboard to create a new application
3. Give it a name and set the region to Europe
4. Follow the on screen instructions to get your code deployed
