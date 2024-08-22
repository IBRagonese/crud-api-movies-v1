# CRUD-API-MOVIES-V1
## Introduction 
After completing the subject Computer-Science Lab. 3, I was assigned the task of creating a backend. This involves utilizing all the technologies learned throughout the course.
* **Node.js** for server hosting
* **MySQL** for database management
* **Postman** as API testing platforms
* **Jason Web Token** for user authentication and authorization
* **Microsoft VSCode, npm,** among other utilities
## Tools and Utilities
**Node.js** is a JavaScript runtime built on Chrome's V8 JS engine that allows JavaScript to be executed on the server side.

**Express.js** is a fast, minimalist web framework for Node.js that simplifies the creation of server-side applications. It provides robust features for building web and mobile applications, including middleware support and routing.

**MySQL** is a relation database management system (RDBMS) known for reliability and performance. It supports ACID (Atomicity, Consistency, Isolation, Durability) transactions to ensure database integrity. 

**Postman** is a development tool used to build, test, and document APIs. It supports HTTP methods including GET, POST, PUT, and DELETE, which will be used in this project.

**JWT** (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications.

**npm** (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share packages of code. It also helps in managing project dependencies.

## Getting started
We are going to need [Node.js](https://nodejs.org/en), to initialize our [package.JSON](https://docs.npmjs.com/cli/v10/configuring-npm/package-json), crucial to create a workflow. I chosed the **CMD** as my preferential console.

```console
npm init -y
```

In the <mark>hello-world</mark> directory, the <mark>hello-world-node.js</mark> will open the first exchange of data between the server and a client.

```console
node /hello-world/hello-world-node.js
```

You should have a nice output in your console, let's close the connection for the moment.

Now let's install [Express](https://expressjs.com/en/starter/installing.html) 

```console
npm i express
```

We have the <mark>hello-world-express.js</mark>, useful in this moment to test if we have succesfully installed Express.

```console
node /hello-world/hello-world-express.js
```

Again a lovely output in the console, awesome, now he have all the server side dependencies, that we need. It's time for the database management.

Let's close the connection and install the [MySQL](https://github.com/mysqljs/mysql) dependency.

```console
npm i mysql
```

You are going to run into trouble right away, there are some configs to do in MySQL because this dependency is not an official project, TODO...

Once you find the solution, let's run the <mark>connection-test-mysql.js</mark>

```console
node /hello-world/connection-test-mysql.js
```

We should see a nice output right there. We are going to use the [connection pool](https://github.com/mysqljs/mysql?tab=readme-ov-file#pooling-connections) from now on. As we see at the <mark>connection-test-mysql-pooling.js</mark>.

It's time to run our **SQL** script with the file <mark>MySQLScript.sql</mark>, I used MySQL Workbench.

Perfect, the <mark>index.js</mark> will be our main from now on, working in the endpoints and routes, with the HTTPs methods to place the data. The most simple example is the GET method were we get all the movies through Postman management.

`GET http://localhost:3000/peliculas/todas`

```console
node index.js
```

```js
[
    {
        "Id": 1,
        "Nombre": "Forrest Gump",
        "Lanzamiento": "1994",
        "Genero": "Comedia/Romance"
    },
    {
        "Id": 2,
        "Nombre": "Sully",
        "Lanzamiento": "2016",
        "Genero": "Drama"
    },
    {
        "Id": 3,
        "Nombre": "Terminator",
        "Lanzamiento": "1984",
        "Genero": "Accion/Ciencia Ficcion"
    }
]
```

Finally, the last part of the project is going to be the authentication and the authorization of the users to have access to certains parts of the app and not so as an admin, using **JWT** after installing it.

```console
npm i jasonwebtoken
```

Let's run <mark>jwt-example.js</mark> for testing that everything got installed.

```console
node /hello-world/jwt-example-js
```

