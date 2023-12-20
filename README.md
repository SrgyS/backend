# Express.js + MongoDB REST API

This is a simple REST API built with Express.js and MongoDB to manage users and books data.

## Setup

**Clone the repository:**

git clone https://github.com/SrgyS/express-mongodb-rest-api.git

**Install dependencies:**

```bash
cd  express-mongodb-rest-api
npm  install
```

**To run MongoDB, it is recommended to use Docker.**

Install Docker according to the instructions for your operating system:

-   Windows — [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).
-   MacOS — [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/).
-   Linux — Depending on your distribution: [CentOS, Debian, Fedora, Raspbian, Ubuntu](https://www.docker.com/products/docker-desktop/).

After installing Docker Desktop:

1.  Open the terminal (macOS and Linux) or Git Bash (Windows).
2.  Enter the following commands:

```bash
docker  pull  mongo
docker  run  -p  27017:27017  --name  mongo  -d  mongo
```

These commands will pull the MongoDB image and run a container named "mongo" on port 27017.

## Testing the API using Postman

You can use the Postman application to test API requests. In the collection  
" /postman/Library Collection.postman_collection.json",  
you will find a set of requests for convenient testing.

## Run the application:

```bash
npm  start
```

The server will start at http://127.0.0.1:3005.
