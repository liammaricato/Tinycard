![Tinycard_logo](https://github.com/liammaricato/Tinycard/blob/master/readme_images/Tinycard_logo.jpg)

:scroll: An API that recreates a tiny part of the Wirecard company. This application was developed as part of Wirecard's selective process. :scroll:

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Running Tests](#running-tests)
- [The Checkout and How to use the API](#the-checkout-and-how-to-use-the-api)
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
In order to run the tests, you should already have everything downloaded in your machine. This means you should have **Node.js** installed and then clone the repository:
```
$ git clone https://github.com/liammaricato/Tinycard.git
```
Once that's done, enter the project's folder and run:
```
$ npm install
```
And now you're set! If you want to run the tests, just type in:
```
$ npm test
```

## The Checkout and How to use the API
Here we have a [Postman Documentation](https://documenter.getpostman.com/view/9206585/SVzuc2hm) that describes and demonstrates how the API should be used.

## Available Routes 

| Routes                 | Description                      | HTTP Methods |
|------------------------|----------------------------------|--------------|
|/buyers                 | register new buyer               | POST         |
|/clients                | register new client              | POST         |
|/payments               | create new payment               | POST         |
|/payments/:paymentid    | get payment status and info      | GET          |
|/payments/:paymentid    | approve a certain payment        | PATCH        |

[More details and examples can be found in the Postman documentation](https://documenter.getpostman.com/view/9206585/SVzuc2hm)

## Useful Links
[Pattern for the emojis](https://gitmoji.carloscuesta.me/?fbclid=IwAR3JhM6m-s7l3XEYPN9vtlZwatGQvxhk8ETzHqbAg5pV5PCH8ajoxzORRQM)
