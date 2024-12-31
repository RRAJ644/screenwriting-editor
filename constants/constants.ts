export const ERROR_MESSAGES = {
  DB_ERRORS: {
    MISSING_URL:
      'MongoDB connection URL is not defined in environment variables.',
    CONNECTION_FAILED:
      'Failed to connect to MongoDB. Please check your database connection.',
    ALREADY_CONNECTED: 'Already connected to the MongoDB database.',
    CONNECTION_ERROR: 'Error while trying to establish MongoDB connection: ',
  },

  DB_CONNECTION: {
    CONNECTION_ESTABLISHED: 'Connecting to MongoDB...',
  },
}
