import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";

let server;
let base;

before(async () => {
  server = createApp().listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test("lists all movies with absolute poster URLs", async () => {
  const res = await fetch(`${base}/api/movies`);
  assert.equal(res.status, 200);
  const movies = await res.json();
  assert.equal(movies.length, 8);
  assert.match(movies[0].poster, /^http:\/\/localhost:\d+\/posters\/300\.jpg$/);
});

test("filters by genre and search query", async () => {
  const byGenre = await (await fetch(`${base}/api/movies?genre=Super%20Hero`)).json();
  assert.deepEqual(byGenre.map((m) => m.id), ["man-of-steel", "x-men"]);

  const bySearch = await (await fetch(`${base}/api/movies?q=gotham`)).json();
  assert.deepEqual(bySearch.map((m) => m.id), ["dark-knight"]);
});

test("returns a single movie or 404", async () => {
  const ok = await fetch(`${base}/api/movies/fargo`);
  assert.equal((await ok.json()).title, "Fargo");

  const missing = await fetch(`${base}/api/movies/nope`);
  assert.equal(missing.status, 404);
});

test("serves trending list and poster images", async () => {
  const trending = await (await fetch(`${base}/api/trending`)).json();
  assert.equal(trending.length, 4);

  const img = await fetch(trending[0].poster);
  assert.equal(img.status, 200);
  assert.match(img.headers.get("content-type"), /image\/jpeg/);
});
