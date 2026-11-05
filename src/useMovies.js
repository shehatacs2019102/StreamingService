import { useEffect, useState } from "react";
import { apiEnabled, fetchMovies } from "./api";
import { bundledMovies } from "./data/movies";

export default function useMovies() {
  const [movies, setMovies] = useState(bundledMovies);
  useEffect(() => {
    if (!apiEnabled) return;
    fetchMovies()
      .then(setMovies)
      .catch((err) => console.warn("Using bundled movies:", err.message));
  }, []);
  return movies;
}
