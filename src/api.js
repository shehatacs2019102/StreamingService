// Base URL of the StreamFlow API (see server/). When unset, components keep
// using their bundled data so the static GitHub Pages build still works.
const API_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, "");

async function get(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API ${path} failed with ${res.status}`);
  return res.json();
}

export const apiEnabled = Boolean(API_URL);
export const fetchMovies = () => get("/api/movies");
export const fetchTrending = () => get("/api/trending");
