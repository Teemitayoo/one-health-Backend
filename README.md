# Backend Interview Task
CLICK [HERE](https://documenter.getpostman.com/view/20276941/2s9XxsWGxQ) TO VIEW THE API DOCUMENTATION

***
To run on a development server: 

```sh
> git clone https://github.com/harryportal/BackendInterview-Task
> cd BackendInterview-Task
> yarn install
```

***
Create a .env file and populate it using the environment variables defined in .env.sample file.
***
Start your Mongo database server and add the MONGO_URI in the .env file.
***
Alternatively, If you have docker installed, you can start the Mongo database with ```docker-compose up -d mongodb``` using the same MONGO_URI in the .env.sample
***
```sh
# run integration tests

> yarn test
```
![Screenshot (386)](https://github.com/harryportal/BackendInterview-Task/assets/37317864/7bbc7d33-23ee-4966-a165-7814a3d141a6)
```sh
# start server

> yarn dev
```
***
To test directly with Postman, import the postmancollection.json into your postman and test the endpoints after starting your server
***

