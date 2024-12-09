
const express = require("express"); // Importing express module for server operations
const createError = require("http-errors"); // Importing module to create HTTP errors
const dotenv = require("dotenv").config(); // Loading environment variables from .env file
const cors = require('cors'); // Importing CORS middleware to enable cross-origin requests
const bodyParser = require("body-parser"); // Importing body-parser middleware to parse request bodies
const app = express(); // Creating an instance of express

const fs = require('fs'); // Importing file system module for file operations
app.use(cors()); // Using CORS middleware in the app
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(bodyParser.json()); // Middleware to parse JSON bodies using body-parser

const apiV1Router = express.Router(); // Creating a new router for API version 1

// Initialize DB
require("./config/dbConfig")(); // Importing and executing the database configuration

// Middleware to log request details after response is sent
app.use((req, res, next) => {
  res.on("finish", () => {
      console.log(req.method + " - " + req.originalUrl + " - " + res.statusCode);
  });
  next();
});

apiV1Router.use('/uploads', express.static('uploads')); // Serving static files from 'uploads' directory

// Importing route for health checks
const RoutesHealth = require("./Routes/health.Route");

// Importing route
const RoutesCategory = require("./Routes/Category.Route");


// Importing route
const RoutesTutorials = require("./Routes/Tutorials.Route");
// Importing route
const RoutesKeywords = require("./Routes/Keywords.Route");
// Importing route
const RoutesType = require("./Routes/Type.Route");
// Importing route
const RoutesLibrary = require("./Routes/Library.Route");

const RoutesFeatured = require("./Routes/Featured.Route")

// Registering route with API v1 router
apiV1Router.use("/Library", RoutesLibrary);
// Registering route with API v1 router
apiV1Router.use("/Type", RoutesType);
// Registering route with API v1 router
apiV1Router.use("/Keywords", RoutesKeywords);
// Registering route with API v1 router
apiV1Router.use("/Tutorials", RoutesTutorials);
// Registering route with API v1 router
apiV1Router.use("/Category", RoutesCategory);
// Registering health check route with API v1 router
apiV1Router.use("/health", RoutesHealth);
apiV1Router.use("/featured", RoutesFeatured);

// Middleware to handle 404 Not Found error for API v1 routes
apiV1Router.use((req, res, next) => {
    next(createError(404, "Not found"));
});

// Custom error handler middleware for API v1 routes
apiV1Router.use((err, req, res, next) => {
    res.status(err.status || 500); // Setting the response status code
    res.send({
        error: {
            status: err.status || 500, // Error status code
            message: err.message, // Error message
        },
    });
});

app.use("/v1" , apiV1Router); // Mounting API v1 router at '/api/v1'

const http = require("https"); // Importing HTTPS module
const PORT = process.env.PORT || 8096; // Setting port from environment variable or default to 8096
// Check if HTTPS is enabled via environment variable
if (process.env.IS_HTTPS == "true") {
    const privateKey = fs.readFileSync(process.env.KEYPATH, 'utf8'); // Reading private key for HTTPS
    const certificate = fs.readFileSync(process.env.CARTPATH, 'utf8'); // Reading certificate for HTTPS
    const credentials = { key: privateKey, cert: certificate }; // Creating credentials object
    
    // Creating and starting HTTPS server
    let server = http.createServer(credentials, app);
    server.listen(PORT, () => {
        console.log('HTTPS Server started on port :' ,PORT);
    });
} else {
    // Starting HTTP server if HTTPS is not enabled
    app.listen(PORT, () => {
        console.log('HTTP Server started on port :' ,PORT);
    });
}
                