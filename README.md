# Javascript Competency Center : University

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project simulates some of the university things and objects we can encounter inside, with different entities.
It is made in typescript using mongoDB and some other dependencies.

## Dependencies

### [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
- Provides TypeScript with type definitions for Mongoose to enhance code development.

### [express](https://www.npmjs.com/package/express)
- Used to build the web server and handle HTTP requests and responses.

### [mongoose](https://www.npmjs.com/package/mongoose)
- Used for MongoDB database interaction, defining schemas, and performing CRUD operations.

### [body-parser](https://www.npmjs.com/package/body-parser)
- Used to parse JSON and url-encoded data from HTTP requests.

### [mongodb](https://www.npmjs.com/package/mongodb)
- Required by Mongoose for low-level MongoDB operations.

### [dotenv](https://www.npmjs.com/package/dotenv)
- Used for taking env variables such as MONGODBNAME or env variable with username and password which is the URL used to connect to the mongo cluster.

## Dev Dependencies

### [@types/express](https://www.npmjs.com/package/@types/express)
- Provides TypeScript with type definitions for Express to enhance code development.


### [typescript](https://www.npmjs.com/package/typescript)
- Used to enable static typing, improve code maintainability, and catch potential errors during development.

### [ts-node](https://www.npmjs.com/package/ts-node)
- Used to directly run TypeScript files without the need for a separate compilation step.


### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```
git clone https://github.com/ValentinVaninetti/js-competency-center-university.git
```

2. Navigate to the project directory:

```
cd js-competency-center-university
```
3. Install dependencies:

```
npm install
```
## Usage

```
npm run start 
```