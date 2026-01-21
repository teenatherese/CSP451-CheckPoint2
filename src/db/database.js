/*
 WHY this module exists:
 - Centralizes database connection logic
 - Prevents multiple connections
 - Allows easy configuration changes
*/

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "app_db",
};

let isConnected = false;

// Simulated database connection function
export const connectDatabase = () => {
  if (isConnected) {
    console.log("Database already connected");
    return;
  }

  try {
    // Fake connection logic for demo
    console.log("Connecting to database...");
    console.log(`Host: ${dbConfig.host}`);
    console.log(`Database: ${dbConfig.database}`);

    isConnected = true;
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

// Centralized query handler (mock)
export const queryDatabase = (query) => {
  if (!isConnected) {
    throw new Error("Database not connected");
  }

  // Mock response for demonstration
  console.log("Executing query:", query);

  return {
    success: true,
    data: [],
  };
};

// Graceful shutdown handling
export const disconnectDatabase = () => {
  if (!isConnected) {
    console.log("No active database connection");
    return;
  }

  isConnected = false;
  console.log("Database disconnected safely");
};
