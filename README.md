# Node.js REST API
# Description
This is a Node.js REST API that provides an endpoint to get users within a 10-kilometer radius based on latitude and longitude. 
The API includes pagination and sorts users by distance.

# Setup
1. Clone the repository:
   git clone https://github.com/srira-amirishetty/locationAPI
   cd locationAPI
   
# Install dependencies:
npm install

# Set up MongoDB:
Ensure MongoDB is running on the default port (27017). 
You can use a local MongoDB instance or a cloud service like MongoDB Atlas.

# Run the application:
npm start

# API Endpoint:

GET /api/users

Query Parameters:
latitude: Latitude of the center point (required)
longitude: Longitude of the center point (required)
page: Page number for pagination (optional, default is 1)
limit: Number of results per page (optional, default is 10)

Response:
A JSON object with a list of users within a 10-kilometer radius, sorted by distance

# Error Handling
400 Bad Request: Missing or invalid parameters.
500 Internal Server Error: General server error.

## Summary

This setup provides a complete REST API with the following features:
- Connection to MongoDB.
- Endpoint to query users within a 10-kilometer radius.
- Distance calculation using the MongoDB's geospatial queries
- Sorting by distance and pagination.
- Basic error handling.
