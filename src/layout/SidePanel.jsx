import React, { useState } from "react";
import styled from "styled-components";
import user from "../assets/icons-sidebar/user.svg";
import cross from "../assets/icons-intro-page/cross.svg";
import { faqItems } from "../data/faq";
import DropDownButton from "../sub-components-intro-page/DropDownButton.jsx";
import DropDownCard from "../sub-components-intro-page/DropDownCard.jsx";
import DropDownIcon from "../sub-components-intro-page/DropDownIcon.jsx";

// The catalogue films rated PG.
const kidsTitles = ["Spider-Man: Spider-Verse", "Tron: Legacy"];
const repo = "https://github.com/shehatacs2019102/StreamingService";
const portfolio = "https://shehatacs2019102.github.io/MyPortifolio/";

const Container = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  box-sizing: border-box;
  margin: 0 24px 0 32px;
  padding: 28px;
  border-radius: 20px;
  overflow-y: auto;
  color: white;
  font-family: "Plus Jakarta Sans", serif;
  background: rgba(11, 5, 6, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  @media (max-width: 750px) {
    flex: none;
    margin: 12px;
    padding: 18px;
    overflow: visible;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 6px 0;
`;

const Subtitle = styled.p`
  margin: 0 0 22px 0;
  color: rgba(255, 255, 255, 0.68);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    gap: 12px;
  }
`;

const Card = styled.div`
  position: relative;
  min-width: 0;
`;

const CardOpen = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  color: white;
  text-align: left;
  font-family: inherit;
  background: transparent;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.2s ease;
  }
  &:hover img {
    transform: scale(1.02);
  }
`;

const CardName = styled.div`
  margin-top: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardMeta = styled.div`
  margin-top: 2px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.65);
`;

const SaveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  background: ${(props) => (props.$saved ? "#e5262c" : "rgba(11, 5, 6, 0.75)")};
`;

const Chips = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Chip = styled.button`
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid
    ${(props) => (props.$active ? "#e5262c" : "rgba(255, 255, 255, 0.2)")};
  color: white;
  font-family: inherit;
  font-size: 0.85rem;
  text-transform: capitalize;
  cursor: pointer;
  background: ${(props) => (props.$active ? "#e5262c" : "transparent")};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  small {
    display: block;
    margin-top: 2px;
    color: rgba(255, 255, 255, 0.65);
  }
`;

const RowLink = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 2px;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  font-family: inherit;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: #ff5a5f;
  }
`;

const RowAnchor = styled(RowLink).attrs({
  as: "a",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  box-sizing: border-box;
  text-decoration: none;
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-family: inherit;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.06);
  color-scheme: dark;
  &::placeholder {
    color: rgba(255, 255, 255, 0.55);
  }
  &:focus {
    outline: none;
    border-color: #e5262c;
  }
`;

const Action = styled.button`
  flex-shrink: 0;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

const Switch = styled.button`
  flex-shrink: 0;
  position: relative;
  width: 46px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: ${(props) =>
    props.$on ? "#e5262c" : "rgba(255, 255, 255, 0.25)"};
  transition: background-color 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.$on ? "23px" : "3px")};
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: white;
    transition: left 0.2s ease;
  }
`;

const ProfileHead = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #e5262c;
  img {
    width: 30px;
    height: 30px;
  }
`;

function MovieGrid({ movies, myList, toggleMyList, openMovie }) {
  return (
    <Grid>
      {movies.map((movie) => {
        const saved = myList.includes(movie.title);
        return (
          <Card key={movie.title}>
            <CardOpen onClick={() => openMovie(movie.title)}>
              <img src={movie.poster} alt="" />
              <CardName>{movie.title}</CardName>
              <CardMeta>
                {movie.date} · {movie.genre} · ★ {movie.rating}
              </CardMeta>
            </CardOpen>
            <SaveButton
              $saved={saved}
              aria-pressed={saved}
              aria-label={`${saved ? "Remove" : "Save"} ${movie.title}`}
              title={saved ? "Remove from My List" : "Add to My List"}
              onClick={() => toggleMyList(movie.title)}
            >
              {saved ? "✓" : "+"}
            </SaveButton>
          </Card>
        );
      })}
    </Grid>
  );
}

function Browse({ movies, ...gridProps }) {
  const [genre, setGenre] = useState("all");
  const genres = ["all", ...new Set(movies.map((m) => m.genre))];
  return (
    <>
      <Title>Browse</Title>
      <Subtitle>The whole catalogue, by genre.</Subtitle>
      <Chips>
        {genres.map((g) => (
          <Chip key={g} $active={g === genre} onClick={() => setGenre(g)}>
            {g}
          </Chip>
        ))}
      </Chips>
      <MovieGrid
        movies={genre === "all" ? movies : movies.filter((m) => m.genre === genre)}
        {...gridProps}
      />
    </>
  );
}

function Search({ movies, ...gridProps }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const results = q
    ? movies.filter((m) =>
        [m.title, m.genre, m.description].some((text) =>
          text.toLowerCase().includes(q)
        )
      )
    : [];
  return (
    <>
      <Title>Search</Title>
      <Subtitle>Look up a film by title, genre or story.</Subtitle>
      <SearchInput
        autoFocus
        type="search"
        aria-label="Search films"
        placeholder="Try dune, action or space"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {q && !results.length ? (
        <Subtitle>No films match "{query.trim()}".</Subtitle>
      ) : (
        <MovieGrid movies={results} {...gridProps} />
      )}
    </>
  );
}

function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Title>FAQ</Title>
      <Subtitle>Quick answers about this demo.</Subtitle>
      {faqItems.map((item, i) => (
        <div key={item.header}>
          <DropDownButton
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.header}
            <DropDownIcon id={i} show={open} src={cross} alt="" />
          </DropDownButton>
          <DropDownCard id={i} show={open}>
            {item.info}
          </DropDownCard>
        </div>
      ))}
    </>
  );
}

export default function SidePanel(props) {
  const {
    view,
    setView,
    movies,
    myList,
    toggleMyList,
    clearMyList,
    openMovie,
    autoplay,
    setAutoplay,
    notifications,
    clearNotifications,
    leaveDemo,
  } = props;
  const gridProps = { myList, toggleMyList, openMovie };

  if (view === "trending") {
    const top = [...movies]
      .sort((a, b) => b.rating - a.rating || b.date - a.date)
      .slice(0, 9);
    return (
      <Container>
        <Title>Trending</Title>
        <Subtitle>The highest-rated titles right now.</Subtitle>
        <MovieGrid movies={top} {...gridProps} />
      </Container>
    );
  }

  if (view === "browse") {
    return (
      <Container>
        <Browse movies={movies} {...gridProps} />
      </Container>
    );
  }

  if (view === "kids") {
    return (
      <Container>
        <Title>Kids</Title>
        <Subtitle>Family picks rated PG.</Subtitle>
        <MovieGrid
          movies={movies.filter((m) => kidsTitles.includes(m.title))}
          {...gridProps}
        />
      </Container>
    );
  }

  if (view === "search") {
    return (
      <Container>
        <Search movies={movies} {...gridProps} />
      </Container>
    );
  }

  if (view === "faq") {
    return (
      <Container>
        <Faq />
      </Container>
    );
  }

  if (view === "support") {
    return (
      <Container>
        <Title>Support</Title>
        <Subtitle>
          StreamFlow is a portfolio demo, so there's no help desk. These are the
          best places to go.
        </Subtitle>
        <RowLink onClick={() => setView("faq")}>
          <span>Read the FAQ</span>
          <span>›</span>
        </RowLink>
        <RowAnchor href={`${repo}/issues`}>
          <span>Report a problem on GitHub</span>
          <span>↗</span>
        </RowAnchor>
        <RowAnchor href={repo}>
          <span>View the source code</span>
          <span>↗</span>
        </RowAnchor>
        <RowAnchor href={portfolio}>
          <span>See my portfolio</span>
          <span>↗</span>
        </RowAnchor>
      </Container>
    );
  }

  if (view === "list") {
    const saved = movies.filter((m) => myList.includes(m.title));
    return (
      <Container>
        <Title>My List</Title>
        <Subtitle>
          {saved.length
            ? `${saved.length} saved in this browser.`
            : "Nothing saved yet. Press + on any film to keep it here."}
        </Subtitle>
        {saved.length ? (
          <MovieGrid movies={saved} {...gridProps} />
        ) : (
          <Action onClick={() => setView("browse")}>Browse films</Action>
        )}
      </Container>
    );
  }

  if (view === "notifications") {
    return (
      <Container>
        <Title>Notifications</Title>
        <Subtitle>
          {notifications.length
            ? "Recently added to the demo catalogue."
            : "You're all caught up."}
        </Subtitle>
        {notifications.map((movie) => (
          <RowLink key={movie.title} onClick={() => openMovie(movie.title)}>
            <span>{movie.title} is now available</span>
            <span>{movie.date}</span>
          </RowLink>
        ))}
        {notifications.length > 0 && (
          <Action style={{ marginTop: 18 }} onClick={clearNotifications}>
            Clear all
          </Action>
        )}
      </Container>
    );
  }

  if (view === "profile") {
    return (
      <Container>
        <ProfileHead>
          <Avatar>
            <img src={user} alt="" />
          </Avatar>
          <div>
            <Title>Demo viewer</Title>
            <Subtitle style={{ margin: 0 }}>
              No account needed. This is a sample profile.
            </Subtitle>
          </div>
        </ProfileHead>
        <RowLink onClick={() => setView("list")}>
          <span>My List</span>
          <span>{myList.length}</span>
        </RowLink>
        <RowLink onClick={() => setView("browse")}>
          <span>Films in the catalogue</span>
          <span>{movies.length}</span>
        </RowLink>
        <RowLink onClick={() => setView("notifications")}>
          <span>Notifications</span>
          <span>{notifications.length}</span>
        </RowLink>
        <RowLink onClick={() => setView("kids")}>
          <span>Kids</span>
          <span>›</span>
        </RowLink>
        <RowLink onClick={() => setView("support")}>
          <span>Support</span>
          <span>›</span>
        </RowLink>
        <RowLink onClick={() => setView("faq")}>
          <span>FAQ</span>
          <span>›</span>
        </RowLink>
        <RowLink onClick={() => setView("settings")}>
          <span>Settings</span>
          <span>›</span>
        </RowLink>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Settings</Title>
      <Subtitle>Saved in this browser.</Subtitle>
      <Row>
        <div>
          Autoplay carousel
          <small>Move to the next film automatically on the home screen.</small>
        </div>
        <Switch
          role="switch"
          $on={autoplay}
          aria-checked={autoplay}
          aria-label="Autoplay carousel"
          onClick={() => setAutoplay(!autoplay)}
        />
      </Row>
      <Row>
        <div>
          Clear My List
          <small>Remove every saved film.</small>
        </div>
        <Action disabled={!myList.length} onClick={clearMyList}>
          Clear
        </Action>
      </Row>
      <Row>
        <div>
          Leave the demo
          <small>Go back to the landing page.</small>
        </div>
        <Action onClick={leaveDemo}>Leave</Action>
      </Row>
    </Container>
  );
}
