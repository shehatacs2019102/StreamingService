import React, { useEffect, useState } from "react";
import styled from "styled-components";
import oppenheimer from "../movie-posters/oppenheimer.jpg";
import dune from "../movie-posters/dune.jpg";
import inception from "../movie-posters/inception.jpg";
import spiderverse from "../movie-posters/spiderverse.jpg";

const films = [
  { poster: oppenheimer, title: "Oppenheimer", date: 2023, genre: "drama", rating: 4.9 },
  { poster: dune, title: "Dune", date: 2021, genre: "sci-fi", rating: 4.8 },
  { poster: inception, title: "Inception", date: 2010, genre: "sci-fi", rating: 4.8 },
  { poster: spiderverse, title: "Spider-Man: Spider-Verse", date: 2018, genre: "animation", rating: 4.8 },
];

const Card = styled.div`
  position: relative;
  flex: 1.25 1 0;
  min-width: 0;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6),
    0 0 90px rgba(229, 38, 44, 0.18);
  @media (max-width: 800px) {
    flex: none;
    width: 100%;
  }
`;

const Backdrop = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.8s ease;
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  padding: 56px 22px 18px 22px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.92));
`;

const Label = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: clamp(1.05rem, 2vw, 1.5rem);
  font-weight: 700;
`;

const Meta = styled.div`
  font-size: 0.85rem;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.78);
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  padding-bottom: 4px;
`;

const Dot = styled.button`
  width: ${(props) => (props.$active ? "22px" : "8px")};
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: ${(props) =>
    props.$active ? "#e5262c" : "rgba(255, 255, 255, 0.5)"};
  transition: width 0.25s ease, background-color 0.25s ease;
`;

export default function HeroSpotlight() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % films.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);
  const film = films[current];
  return (
    <Card>
      {films.map((f, i) => (
        <Backdrop key={f.title} src={f.poster} alt="" $active={i === current} />
      ))}
      <Caption>
        <div>
          <Label>Now showing</Label>
          <Title>{film.title}</Title>
          <Meta>
            {film.date} · {film.genre} · ★ {film.rating}
          </Meta>
        </div>
        <Dots>
          {films.map((f, i) => (
            <Dot
              key={f.title}
              $active={i === current}
              aria-label={`Show ${f.title}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </Dots>
      </Caption>
    </Card>
  );
}
