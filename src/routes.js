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

module.exports = router;
