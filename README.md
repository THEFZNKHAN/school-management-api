# School Management API

This is a Node.js application that provides APIs for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Features

- Add a new school with its name, address, and coordinates.
- List all schools sorted by distance from a user's location.
- Follows best practices for project structure, including separation of concerns (controllers, services, models).
- Centralized error handling.
- Code linting and formatting with ESLint and Prettier.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (with Neon)
- **Driver:** `pg` (node-postgres)
- **Linting:** ESLint
- **Formatting:** Prettier

## Project Structure

```
├── src
│   ├── api
│   │   └── routes.js
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   └── schoolController.js
│   ├── middleware
│   │   └── errorHandler.js
│   ├── models
│   │   └── schoolModel.js
│   ├── services
│   │   └── schoolService.js
│   └── utils
│       └── distance.js
├── .env
├── .eslintrc.json
├── .prettierrc
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd school-management-api
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Set up the environment variables:**

    - Create a `.env` file in the root of the project.
    - Add your Neon database URL to the `.env` file:

      ```
      DATABASE_URL=your_neon_db_url
      ```

5.  **Start the server:**

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:3000`.

## API Endpoints

### Add School

- **Method:** `POST`
- **Endpoint:** `/api/addSchool`
- **Payload:**

  ```json
  {
    "name": "Test School",
    "address": "123 Test Street",
    "latitude": 34.0522,
    "longitude": -118.2437
  }
  ```

- **Success Response:**

  ```json
  {
    "message": "School added successfully",
    "school": {
      "id": 1,
      "name": "Test School",
      "address": "123 Test Street",
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
  ```

### List Schools

- **Method:** `GET`
- **Endpoint:** `/api/listSchools`
- **Query Parameters:**

  - `latitude` (number, required): The user's latitude.
  - `longitude` (number, required): The user's longitude.

- **Example URL:** `http://localhost:3000/api/listSchools?latitude=34.0522&longitude=-118.2437`

- **Success Response:**

  ```json
  [
    {
      "id": 1,
      "name": "Test School",
      "address": "123 Test Street",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "distance": 0
    },
    {
      "id": 2,
      "name": "Another School",
      "address": "456 Another Street",
      "latitude": 34.0525,
      "longitude": -118.2440,
      "distance": 0.040
    }
  ]
  ```

## Linting and Formatting

- **To check for linting errors:**

  ```bash
  npm run lint
  ```

- **To automatically fix formatting issues:**

  ```bash
  npm run format
  ```
