import { Router } from "express";
import { movies, trending } from "../data/movies.js";

// Turns a poster filename into an absolute URL the browser can load.
function withPosterUrl(req, item) {
  return {
    ...item,
    poster: `${req.protocol}://${req.get("host")}/posters/${encodeURIComponent(item.poster)}`,
  };
}

const router = Router();

// GET /api/movies?genre=action&q=dark
router.get("/movies", (req, res) => {
  const genre = String(req.query.genre ?? "").trim().toLowerCase();
  const q = String(req.query.q ?? "").trim().toLowerCase();

  const results = movies.filter(
    (m) =>
      (!genre || m.genre.toLowerCase() === genre) &&
      (!q ||
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q))
  );

  res.json(results.map((m) => withPosterUrl(req, m)));
});

router.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  res.json(withPosterUrl(req, movie));
});

router.get("/genres", (req, res) => {
  res.json([...new Set(movies.map((m) => m.genre))].sort());
});

router.get("/trending", (req, res) => {
  res.json(trending.map((t) => withPosterUrl(req, t)));
});

export default router;
