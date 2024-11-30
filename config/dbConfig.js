
const mongoose = require('mongoose');

module.exports = () => {
  // Connect to MongoDB using the connection string and credentials from environment variables.
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Mongodb connected....') // Log on successful connection.
    })
    .catch(err => console.log(err.message)); // Log any errors that occur during connection.

  // Event listener for successful connection to the database.
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db...');
  });

  // Event listener for any connection errors.
  mongoose.connection.on('error', err => {
    console.log(err.message); // Log the error message.
  });

  // Event listener for when the connection is disconnected.
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...');
  });

  // Event listener for SIGINT signal (typically sent from the terminal).
  // This is used to handle graceful shutdown of the application.
  process.on('SIGINT', () => {
    mongoose.connection.close(() => { // Close the MongoDB connection.
      console.log(
        'Mongoose connection is disconnected due to app termination...'
      );
      process.exit(0); // Exit the process after the connection is closed.
    });
  });
};
                