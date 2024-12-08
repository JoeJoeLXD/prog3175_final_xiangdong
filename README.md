Movie API (prog3175_final_xiangdong):


A simple Node.js and Express-based REST API that allows to perform CRUD (Create, Read, Update, Delete) operations on a list of movies stored in a JSON file. This project demonstrates how to implement basic API endpoints without using a database, using movies.json as the data source.


Description:
This API supports the following operations on movie resources:
Create: Add a new movie with title, genre, and releaseYear attributes.
Read:
    1. Get all movies
    2. Get a movie by its ID
Update: Update the title, genre, or releaseYear of an existing movie by its ID.
Delete: Remove a movie by its ID.
Data persistence is handled by reading and writing to a movies.json file, ensuring all changes are preserved between server restarts.


Requirements:
Node.js (version 14 or higher recommended)
npm (comes with Node.js)


Installation & Running:
1. Clone the Repository:
git clone https://github.com/JoeJoeLXD/prog3175_final_xiangdong.git
cd prog3175_final_xiangdong

2. Install Dependencies:
npm install

3. Run the Server: For development mode with automatic restarts (using nodemon):
npm run dev
Or for a simple production run:
npm start

4. Access the API: The server will start by default on http://localhost:3000.
All endpoints are prefixed with /movies:
    Get all movies: GET http://localhost:3000/movies
    Get Single movie: GET http://localhost:3000/movies/:id
    Create a movie: POST http://localhost:3000/movies
    Update a movie by ID: PUT http://localhost:3000/movies/:id
    Delete a Movie by ID: DELETE http://localhost:3000/movies/:id


Endpoints & Example Usage
1. Create a New Movie
Endpoint: POST /movies
Request Body (JSON):
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "releaseYear": 2014
}
Response Example:
{
  "id": 3,
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "releaseYear": 2014
}

2. Get All Movies
Endpoint: GET /movies
Response Example:
[
  {
    "id": 1,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "releaseYear": 1999
  },
  {
    "id": 2,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010
  }
]

3. Get a Movie by ID
Endpoint: GET /movies/:id
Example: GET /movies/1
Response Example:
{
  "id": 1,
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "releaseYear": 1999
}

4. Update a Movie by ID
Endpoint: PUT /movies/:id
Example: PUT /movies/2
Request Body (JSON):
{
  "title": "Inception (Director's Cut)",
  "genre": "Sci-Fi",
  "releaseYear": 2010
}
Response Example:
{
  "id": 2,
  "title": "Inception (Director's Cut)",
  "genre": "Sci-Fi",
  "releaseYear": 2010
}

5. Delete a Movie by ID
Endpoint: DELETE /movies/:id
Example: DELETE /movies/3
Response: Status code 204 on successful deletion (no response body).


JSON Data Handling
All movie data is stored in movies.json. The API reads from and writes to this file on every operation, ensuring data persistence.

Example movies.json:
[
  {
    "id": 1,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "releaseYear": 1999
  },
  {
    "id": 2,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010
  }
]


Git Commit History Example
Following the recommended pattern, commits were made after completing each CRUD endpoint:
    After completing Create endpoint:
            Commit message: Added Create endpoint for Movie resource.
    After completing Read endpoints:
            Commit message: Added Read endpoints (all and by id) for Movie resource.
    After completing Update endpoint:
            Commit message: Added Update endpoint for Movie resource.
    After completing Delete endpoint:
            Commit message: Added Delete endpoint for Movie resource.

