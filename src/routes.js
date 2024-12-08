// src/routes.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Utility functions to handle reading/writing JSON
const moviesFilePath = path.join(__dirname, "..", "movies.json");

function readMovies() {
  const data = fs.readFileSync(moviesFilePath, "utf-8");
  return JSON.parse(data);
}

function writeMovies(movies) {
  fs.writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2));
}

// GET /movies - Retrieve all movies
router.get("/", (req, res) => {
  const movies = readMovies();
  res.json(movies);
});

// GET /movies/:id - Retrieve a movie by ID
router.get("/:id", (req, res) => {
  const movies = readMovies();
  const id = parseInt(req.params.id, 10);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.json(movie);
});

// POST /movies - Create a new movie
router.post("/", (req, res) => {
  const movies = readMovies();
  const { title, genre, releaseYear } = req.body;

  // Validate request body
  if (!title || !genre || !releaseYear) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Generate a new ID (simple approach: find max existing ID and add 1)
  const newId =
    movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;

  const newMovie = {
    id: newId,
    title,
    genre,
    releaseYear,
  };

  movies.push(newMovie);
  writeMovies(movies);

  res.status(201).json(newMovie);
});

module.exports = router;
