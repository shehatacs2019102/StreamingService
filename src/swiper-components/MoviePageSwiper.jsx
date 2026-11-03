import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./moviepageswiper.css";
import logo from "../assets/logo.png";
import { Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import { apiEnabled, fetchMovies } from "../api";

const StudioLogo = styled.img`
  z-index: 10;
  height: 40px;
  width: 40px;
  margin-top: 12px;
  margin-left: 12px;
  position: absolute;
  align-self: flex-start;
  @media (max-height: 820px) {
    height: 30px;
    width: 30px;
    margin-top: 10px;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export default function MoviePageSwiper(props) {
  const [movies, setMovies] = useState([
    {
      poster: require("../movie-posters/300.jpg"),
      title: "300",
      trailer: "https://www.youtube.com/embed/2zqy21Z29ps?si=IUuyzeTjUV6Ya_7w",
      description:
        "Based on the 1998 Dark Horse comic book limited series by Frank Miller and Lynn Varley, 300 is a fictionalized retelling of the Battle of Thermopylae in the Greco-Persian Wars, following King Leonidas (Gerard Butler) as he leads 300 Spartans against the Persian god-king Xerxes.",
      rating: 4.8,
      date: 2006,
      genre: "action",
    },
    {
      poster: require("../movie-posters/darkknight.jpg"),
      title: "Dark Knight",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=8KQkWv3wM17Dwa8N",
      description:
        "The Dark Knight is a 2008 superhero film directed by Christopher Nolan. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City before the Joker plunges the city into anarchy.",
      rating: 4.9,
      date: 2008,
      genre: "action",
    },
    {
      poster: require("../movie-posters/dune.jpg"),
      title: "Dune",
      trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
      description:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people as malevolent forces explode into conflict over the desert planet Arrakis.",
      rating: 4.8,
      date: 2021,
      genre: "sci-fi",
    },
    {
      poster: require("../movie-posters/interstellar.jpg"),
      title: "Interstellar",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers through a newly discovered wormhole to find a new planet for humanity.",
      rating: 4.9,
      date: 2014,
      genre: "sci-fi",
    },
    {
      poster: require("../movie-posters/inception.jpg"),
      title: "Inception",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      rating: 4.8,
      date: 2010,
      genre: "sci-fi",
    },
    {
      poster: require("../movie-posters/bladerunner.jpg"),
      title: "Blade Runner 2049",
      trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
      description:
        "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years, in order to prevent a potentially catastrophic crisis across society.",
      rating: 4.7,
      date: 2017,
      genre: "sci-fi",
    },
    {
      poster: require("../movie-posters/oppenheimer.jpg"),
      title: "Oppenheimer",
      trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral and political fallout that followed the Trinity test.",
      rating: 4.9,
      date: 2023,
      genre: "drama",
    },
    {
      poster: require("../movie-posters/spiderverse.jpg"),
      title: "Spider-Man: Spider-Verse",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
      description:
        "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: 4.8,
      date: 2018,
      genre: "animation",
    },
    {
      poster: require("../movie-posters/madmax.jpg"),
      title: "Mad Max: Fury Road",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      description:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper, and a drifter named Max.",
      rating: 4.7,
      date: 2015,
      genre: "action",
    },
    {
      poster: require("../movie-posters/johnwick.jpg"),
      title: "John Wick",
      trailer: "https://www.youtube.com/embed/C0BMx-qxsP4",
      description:
        "An ex-hitman comes out of retirement to track down the gangsters random act of violence that took everything from him, unleashing a relentless one-man war against the criminal underworld.",
      rating: 4.6,
      date: 2014,
      genre: "action",
    },
    {
      poster: require("../movie-posters/1917.jpg"),
      title: "1917",
      trailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
      description:
        "April 1917, the Western Front. Two British soldiers are sent to deliver an urgent message to an isolated regiment. If the message is not received in time, the regiment will walk into a devastating trap and be massacred.",
      rating: 4.7,
      date: 2019,
      genre: "war",
    },
    {
      poster: require("../movie-posters/joker.jpg"),
      title: "Joker",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
      description:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of a decaying city. Wearing two masks, he embarks on a downward spiral of social revolution and bloody crime.",
      rating: 4.6,
      date: 2019,
      genre: "crime",
    },
    {
      poster: require("../movie-posters/fargo.jpg"),
      title: "Fargo",
      trailer: "https://www.youtube.com/embed/ju75Sd4yAZw?si=lUx04oTLX0xK9YZW",
      description:
        "Fargo is a 1996 black comedy crime film written, directed, produced and edited by Joel and Ethan Coen. Frances McDormand plays police chief Marge Gunderson, who investigates after a car salesman hires two dimwitted criminals to kidnap his wife.",
      rating: 4.5,
      date: 1996,
      genre: "detective",
    },
    {
      poster: require("../movie-posters/manofsteel.jpg"),
      title: "Man Of Steel",
      trailer: "https://www.youtube.com/embed/T6DJcgm3wNY?si=4gqZjNjawQl9s2sz",
      description:
        "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and produced by Christopher Nolan, it depicts the character's origin story as Clark Kent learns he is an alien from Krypton.",
      rating: 4.4,
      date: 2013,
      genre: "super hero",
    },
    {
      poster: require("../movie-posters/snowwhite.jpg"),
      title: "Snow White & the Huntsman",
      trailer: "https://www.youtube.com/embed/uudKJzOFGlY?si=6-wO1BwcmryiSUW0",
      description:
        "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.",
      rating: 4.1,
      date: 2012,
      genre: "fantasy",
    },
    {
      poster: require("../movie-posters/thething.jpg"),
      title: "The Thing",
      trailer: "https://www.youtube.com/embed/JIdw2B6zipc?si=pMwlDK7p6gou_zJZ",
      description:
        "Tells the story of a group of American researchers in Antarctica who encounter the eponymous Thing, an extraterrestrial life-form that assimilates, then imitates, other organisms, overcoming the crew with paranoia and conflict.",
      rating: 4.7,
      date: 1982,
      genre: "horror",
    },
    {
      poster: require("../movie-posters/tron.jpg"),
      title: "Tron: Legacy",
      trailer: "https://www.youtube.com/embed/P78pl1FUXfA?si=idjKLjMo4SUYyeTs",
      description:
        "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed, where he meets his father's corrupted creation and a unique ally who was born inside the digital grid.",
      rating: 4.3,
      date: 2010,
      genre: "sci-fi",
    },
    {
      poster: require("../movie-posters/x-men.jpg"),
      title: "X-Men",
      trailer: "https://www.youtube.com/embed/COvnHv42T-A?si=Nm_c3IrfS5H_025E",
      description:
        "MacTaggert, seeking Xavier's advice on mutation, takes him and Raven to the CIA, where they convince Director McCone that mutants exist and that Shaw is a threat, bringing together the first class of mutants.",
      rating: 4.4,
      date: 2011,
      genre: "super hero",
    },
  ]);
  useEffect(() => {
    if (!apiEnabled) return;
    fetchMovies()
      .then(setMovies)
      .catch((err) => console.warn("Using bundled movies:", err.message));
  }, []);
  const swiperRef = useRef(null);
  const { setMovieTitle, setMoviePoster, setMovieTrailer, setMovieTDescription, setMovieRating , setMovieDate ,setMovieGenre } = props;

  const selectMovie = (movie) => {
    if (!movie) return;
    setMoviePoster(movie.poster);
    setMovieTitle(movie.title);
    setMovieTrailer(movie.trailer);
    setMovieTDescription(movie.description);
    setMovieRating(movie.rating);
    setMovieDate(movie.date);
    setMovieGenre(movie.genre);
  };

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      centeredSlides={true}
      slideToClickedSlide={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={(swiper) => {
        selectMovie(movies[swiper.activeIndex]);
      }}
      modules={[Pagination, Autoplay]}
      className="movieSwiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        344: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        412: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 3.5,
          spaceBetween: 14,
        },
        1000: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
      }}
    >
      {movies.map((movie, i) => {
        return (
          <SwiperSlide
            key={movie.id || movie.title || i}
            className="movieSwiperSlide"
            onClick={() => {
              swiperRef.current?.slideTo(i);
              selectMovie(movie);
            }}
          >
            <StudioLogo src={logo} alt="" />
            <h3>{movie["title"]}</h3>
            <img
              className="movieSwiperImage"
              src={movie["poster"]}
              alt={movie["title"]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
