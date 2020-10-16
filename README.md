## Creating a REST API in less than 10 mins

This is a really cool way to built your REST API for development purpose. Follow the docs [here](https://github.com/typicode/json-server)

>P.S This is just my template

### Hardcoded Data

1. Change the data in [db.json](db.json)
2. Run  `npm run dev-json`. It will be running in development mode with `--watch` to look for changes

### Randomly Generated Data

1. Change the fields according to your needs in [index.js](index.js) with corresponding faker methods. You can see all the available faker methods [here](http://marak.github.io/faker.js/#toc6__anchor)
2. Run `npm run dev-index`. 

### Deployment
Deploying the application which uses json-server is very easy. You just have to create a GitHub repository and push your local changes to that repository and access it with a specific URL from the browser.

In my case it is https://my-json-server.typicode.com/arnabsen1729/json-server-template/

Since it is using the `db.json` the REST API endpoints are:
https://my-json-server.typicode.com/arnabsen1729/json-server-template/users
https://my-json-server.typicode.com/arnabsen1729/json-server-template/todos

**N.B** It will use the `start` script in your `package.json`. So make sure to change that accordingly. 