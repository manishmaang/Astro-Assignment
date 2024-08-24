# Astro Assignment

## Project Overview
This project implements a flow distribution algorithm for connecting users with astrologers. The goal is to ensure a balanced distribution of users while allowing flexibility for top astrologers.

## Deliverables Overview

### Node.js Backend Code
Here’s a summary of your backend code:
- **`app.js`**: Sets up the Express application and integrates the routes.
- **`routes/distribution.js`**: Defines API routes for handling distribution and retrieving data.
- **`controllers/distributionController.js`**: Implements the distribution algorithm and initializes data.
- **`models/entities.js`**: Defines the `User` and `Astrologer` classes.

### API Documentation

**Overview:**

Your API exposes the following endpoints:

- **`POST /api/distribute`**
  - **Description**: Distributes users among astrologers.
  - **Request**: No body required.
  - **Response**: JSON object with a success message and the updated list of astrologers.
  - **Example Request:**
    ```http
    POST /api/distribute
    ```
  - **Example Response:**
    ```json
    {
      "message": "Flow distributed successfully",
      "astrologers": [
        { "id": 1, "name": "Astrologer 1", "isTopAstro": true, "currentClients": 10, "totalUsers": [1, 2, 3] },
        // more astrologers
      ]
    }
    ```

- **`GET /api/astrologers`**
  - **Description**: Retrieves the list of all astrologers.
  - **Request**: No body required.
  - **Response**: JSON object with the list of astrologers.
  - **Example Request:**
    ```http
    GET /api/astrologers
    ```
  - **Example Response:**
    ```json
    {
      "astrologers": [
        { "id": 1, "name": "Astrologer 1", "isTopAstro": true, "currentClients": 10, "totalUsers": [1, 2, 3] },
        // more astrologers
      ]
    }
    ```

- **`GET /api/users`**
  - **Description**: Retrieves the list of all users.
  - **Request**: No body required.
  - **Response**: JSON object with the list of users.
  - **Example Request:**
    ```http
    GET /api/users
    ```
  - **Example Response:**
    ```json
    {
      "users": [
        { "id": 1, "name": "User 1", "astroId": 1 },
        // more users
      ]
    }
    ```

- **`GET /api/`**
  - **Description**: Provides a welcome message and basic instructions.
  - **Request**: No body required.
  - **Response**: JSON object with a welcome message.
  - **Example Request:**
    ```http
    GET /api/
    ```
  - **Example Response:**
    ```json
    {
      "message": "Welcome to the API. Use /distribute to distribute flow."
    }
    ```

### Algorithm Documentation

**Flow Distribution Algorithm:**

1. **Initialization:**
   - **Astrologers**: Created with IDs from 1 to 500. The first 50 are marked as top astrologers.
   - **Users**: Created with IDs from 1 to 3000.

2. **Algorithm:**
   - **Function**: `distributeFlow()`
   - **Process**:
     - Iterates over each user.
     - Filters astrologers who have not reached their maximum client limit.
     - Randomly selects one of the available astrologers.
     - Assigns the user to the selected astrologer.
     - Updates the astrologer's client count and total user list.

3. **Data Structures:**
   - **Astrologer**:
     - `id`: Unique identifier.
     - `name`: Name of the astrologer.
     - `isTopAstro`: Boolean indicating if the astrologer is a top astrologer.
     - `currentClients`: Number of current clients.
     - `baseMaxClients`: Base maximum number of clients.
     - `changeFactor`: Multiplier for adjusting `baseMaxClients`.
     - `totalUsers`: List of user IDs assigned to the astrologer.

   - **User**:
     - `id`: Unique identifier.
     - `name`: Name of the user.
     - `astroId`: ID of the assigned astrologer.

4. **Handling Top Astrologers:**
   - Top astrologers have the flexibility to handle more or fewer clients based on the `changeFactor`.


