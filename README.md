# Tinycard
 

:scroll: An API that recreates a tiny part of the Wirecard company. This application was developed as part of Wirecard's selective process. :scroll:

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Running Tests](#running-tests)
- [Available Routes](#available-routes)
- [Useful Links](#useful-links)  
  
## Introduction
Tinycard is an API that processes payments along with a Postman documentation that makes it easy for anyone to use.

## Technologies
What was used:
- **[Docker](https://docs.docker.com)** and **[DockerHub](https://hub.docker.com)** to upload our project image.
- **[MongoDB](https://www.mongodb.com/)** to store data, **[Mongoose](https://mongoosejs.com/)** as our Node.js ODM (object data modeling) and **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** as our database host.
- **[Jest](https://jestjs.io)** as a framework for tests.
- **[Npm](https://www.npmjs.com/)** as a package manager.

## Getting Started
To get started, you should have **Docker** installed.
Then pull our project image from DockerHub:
```
$ docker pull liammaricato/tinycard
```
And run a new container on port 3333:
```
$ docker run -d -p 3333:3333 liammaricato/tinycard
```
And you're already good to go!

## Running Tests
To run the tests, just run the following command:
```
$ npm test
```

## Available Routes 

| Routes                 | Description                      | HTTP Methods |
|------------------------|----------------------------------|--------------|
|/buyers                 | register new buyer               | POST         |
|/clients                | register new client              | POST         |
|/payments               | create new payment               | POST         |
|/payments/:paymentid    | get payment status and info      | GET          |
|/payments/:paymentid    | approve a certain payment        | PATCH        |

[More details and examples can be found in the Postman documentation](https://documenter.getpostman.com/view/9206585/SVzuaM9E)

## Useful Links
[Pattern for the emojis](https://gitmoji.carloscuesta.me/?fbclid=IwAR3JhM6m-s7l3XEYPN9vtlZwatGQvxhk8ETzHqbAg5pV5PCH8ajoxzORRQM)
