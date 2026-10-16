import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import moviesRouter from "./routes/movies.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const postersDir = path.resolve(here, "../../src/movie-posters");

export function createApp() {
  const app = express();

  // Comma-separated list of allowed origins; unset allows any origin.
  const origins = process.env.CORS_ORIGIN?.split(",").map((o) => o.trim());
  app.use(cors({ origin: origins ?? true }));

  app.get("/api/health", (req, res) => res.json({ status: "ok" }));
  app.use("/api", moviesRouter);
  app.use("/posters", express.static(postersDir, { maxAge: "7d" }));

  app.use((req, res) => res.status(404).json({ error: "Not found" }));
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}
