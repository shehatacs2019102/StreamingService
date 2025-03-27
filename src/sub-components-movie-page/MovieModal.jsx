import React from "react";
import "./moviemodal.css";
export default function MovieModal(props) {
  const { modalstate,movieTrailer, setModalState } = props;
  return (
    <div className={modalstate ? "active" : "disabled"}>
      <button
        className="closebutton"
        onClick={() => {
          setModalState(false);
        }}
      >
        Close Trailer
      </button>
      <iframe
        className="trailer"
        src={movieTrailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
