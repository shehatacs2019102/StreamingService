# StreamFlow

A movie-browsing UI I built with React. You can scroll through movies, open one to see its details and watch the trailer. It's a portfolio project, not a real streaming service.

Live demo: https://shehatacs2019102.github.io/StreamingService

## What's in here

- **Frontend** (project root): React 19 (Create React App), React Router, Swiper and styled-components.
- **Backend** ([server/](server/)): a small Express API that serves the movie list, the trending titles and the poster images.

The frontend doesn't need the backend. If no API URL is set, it uses the movie data bundled with the app. That's how the GitHub Pages version runs.

## Running it locally

You'll need Node 20 or newer.

### Frontend only

```bash
npm install
npm start
```

This opens http://localhost:3000 and uses the bundled data.

### Frontend + API

Install the server's dependencies once:

```bash
npm install --prefix server
```

Create a `.env.development.local` file in the project root that points the app at the API:

```
REACT_APP_API_URL=http://localhost:4000
```

Then run these in two terminals:

```bash
npm run server   # API on http://localhost:4000, restarts when you change a file
npm start        # React app on http://localhost:3000
```

The movie page and the trending slider now load from the API. If the API is down, they go back to the bundled data and log a warning in the console.

## The API

| Method | Path                    | What it does                                       |
| ------ | ----------------------- | -------------------------------------------------- |
| GET    | `/api/health`           | Returns `{ "status": "ok" }`                       |
| GET    | `/api/movies?genre=&q=` | All movies. Filter by genre or search the title and description |
| GET    | `/api/movies/:id`       | One movie, or a 404                                |
| GET    | `/api/genres`           | List of genres                                     |
| GET    | `/api/trending`         | Titles for the trending slider                     |
| GET    | `/posters/:file`        | Poster images                                      |

The movie data is stored in [server/src/data/movies.js](server/src/data/movies.js). The posters are served directly from `src/movie-posters`, so the frontend and the API use the same image files.

The server reads two environment variables:

- `PORT`: the port the API listens on. The default is `4000`.
- `CORS_ORIGIN`: a comma-separated list of sites allowed to call the API, e.g. `https://shehatacs2019102.github.io`. If it isn't set, any site can call it.

See [server/README.md](server/README.md) for more on the server.

## Tests

```bash
npm test                  # frontend
npm test --prefix server  # API
```

## Deploying

The frontend is hosted on GitHub Pages from the `gh-pages` branch. If you host the API somewhere too, set `REACT_APP_API_URL` to its address when you build:

```bash
REACT_APP_API_URL=https://your-api.example.com npm run build
```

If you leave it unset, the build uses the bundled data, as it does now.
