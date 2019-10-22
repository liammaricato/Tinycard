# Tinycard
 

:scroll: An API that recreates a tiny part of the Wirecard company. This application was developed as part of Wirecard's selective process. :scroll:

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Running Locally](#running-locally)
  - [Running Tests](#running-tests)
- [Available Routes](#available-routes)
- [All Tasks](#all-tasks)
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

## Running Locally

## Running Tests

## Available Routes 

| Routes                 | Description                      | HTTP Methods |
|------------------------|----------------------------------|--------------|
|/buyers                 | register new buyer               | POST         |
|/clients                | register new client              | POST         |
|/payments               | create new payment               | POST         |
|/payments/:paymentid    | get payment status and info      | GET          |
|/payments/:paymentid    | approve a certain payment        | PATCH        |

[More details and examples can be found in the Postman documentation](https://documenter.getpostman.com/view/1994420/S1EQUJaE)

## All Tasks


## Useful Links
[Style guilde that was chosen to follow](https://github.com/i0natan/nodebestpractices/blob/master/README.brazilian-portuguese.md#1-pr%C3%A1ticas-de-estrutura-de-projeto)  
[Linter used](https://github.com/pagarme/javascript-style-guide)  
[Commit pattern used](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50)  
[Pattern for the emojis](https://gitmoji.carloscuesta.me/?fbclid=IwAR3JhM6m-s7l3XEYPN9vtlZwatGQvxhk8ETzHqbAg5pV5PCH8ajoxzORRQM)