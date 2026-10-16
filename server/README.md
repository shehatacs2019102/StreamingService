# StreamFlow API

Express backend that serves the movie catalogue and poster images for the StreamFlow frontend.

## Run

```bash
cd server
npm install
npm run dev     # restarts on file changes
npm start       # production
npm test
```

Runs on `http://localhost:4000` by default.

| Env var       | Default | Purpose                                              |
| ------------- | ------- | ---------------------------------------------------- |
| `PORT`        | `4000`  | Port to listen on                                    |
| `CORS_ORIGIN` | any     | Comma-separated allowed origins, e.g. `https://shehatacs2019102.github.io` |

## Endpoints

| Method | Path                         | Description                                   |
| ------ | ---------------------------- | --------------------------------------------- |
| GET    | `/api/health`                | Health check                                  |
| GET    | `/api/movies?genre=&q=`      | List movies, optionally filtered by genre or text search |
| GET    | `/api/movies/:id`            | One movie, or 404                             |
| GET    | `/api/genres`                | Distinct genres                               |
| GET    | `/api/trending`              | Trending titles for the intro page            |
| GET    | `/posters/:file`             | Poster images (served from `../src/movie-posters`) |

## Connecting the frontend

Create `.env.development.local` in the project root:

```
REACT_APP_API_URL=http://localhost:4000
```

Then run `npm start` in the root. When `REACT_APP_API_URL` is not set, the frontend uses its bundled data, so the GitHub Pages build keeps working without the API.
