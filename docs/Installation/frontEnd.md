---
id: frontEnd
title: Front end
---
In our handover there is a folder named `frontend`, in this is stored the user interface with the program. It is a react app, and can be started with the command `npm install` followed by `npm start`, you will then be taken to a browser window with the application loaded.
## Deployment
The code can be deployed using any static hosting, our recommendation is [ZEIT Now](https://zeit.co/) as they have a very generous free tier and it is very easy to get set up. There are two main ways of getting set up

### Git Repository
*If you don't know what this is, then proceed to the other option.*

For continuous development, this is a better option as any changes you make will be automatically deployed to the website.

This can be done in 3 steps

1. Add the files to a GitHub, GitLab or Bitbucket repository
2. Create an account [here](https://zeit.co/signup)
3. Link together the repository and ZEIT by clicking `Import Project`

### Command line
1. Install npm using the instructions [here](https://www.npmjs.com/get-npm)
2. Create a ZEIT account [here](https://zeit.co/signup)
3. Install the Now CLI using the instructions [here](https://zeit.co/download)
4. The code can then be deployed with the command `now`, as documented [here](https://zeit.co/docs/v2/platform/deployments#now-cli)
