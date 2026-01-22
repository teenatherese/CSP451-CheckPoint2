📌 API Overview

This API provides basic endpoints for managing users and verifying that the backend service is running.
It follows REST principles to keep routing, logic, and responses organized and maintainable.

Endpoints
GET /api/health
Returns the current status of the API
Used to confirm the server is running correctly
GET /api/users
Retrieves a list of users
Returns mock user data for development and testing purposes
POST /api/users
Creates a new user
Accepts user data in the request body

Methods
Method	Endpoint	Description
GET	/api/health	Check API availability
GET	/api/users	Fetch all users
POST	/api/users	Create a new user

Purpose
To demonstrate a clean REST API structure
To separate routing from controller logic
To simulate real backend behavior without a database
To support future integration with authentication and database layers
To align with professional backend development practices