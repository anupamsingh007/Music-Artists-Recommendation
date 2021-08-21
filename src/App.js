import React from "react";
import "./styles.css";
import { useState } from "react";

const favMusic = {
  pop: [
    { name: "Justin Bieber", rating: "5/5", trait: "Strong come-back" },
    { name: "24kGoldn", rating: "3.5/5", trait: "Newcomer and strong vocals" },
    { name: "Ariana Grande", rating: "4.5", trait: "all-rounder" }
  ],

  hiphop: [
    {
      name: "Russ",
      rating: "4.6",
      trait: "consistent and independnent"
    },
    {
      name: "Logic",
      rating: 3.8,
      trait: "premium quality sound with no pop feel."
    },
    {
      name: "J-Cole",
      rating: "4.8",
      trait: "one of the greatest of the generation."
    }
  ],
  Edm: [
    {
      name: "Amelie Lens",
      rating: "3.2",
      trait: "captivating techno music and crowd control"
    },
    {
      name: "Lost Stories",
      rating: "4.3",
      trait: "Smooth mixture of melodies"
    },
    {
      name: "Avicci",
      rating: "4.9",
      trait: "message always conveyed through songs"
    }
  ]
};

export default function App() {
  const [song, setSong] = useState("hiphop");

  function songClickHandler(song) {
    setSong(song);
  }
  return (
    <div className="App">
      <h1>Favourite Music Artist By Genre</h1>
      <p style={{ fontSize: "smaller" }}>
        Some of my favorite Music Artists in different genre;
      </p>
      <div>
        {Object.keys(favMusic).map((song) => (
          <button
            key="genre"
            onClick={() => songClickHandler(song)}
            style={{
              cursor: "pointer",
              background: "plum",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {song}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "center" }}>
        <ul style={{ textAlign: "center" }}>
          {favMusic[song].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{music.name}</div>
              <div style={{ fontSize: "smaller" }}>{music.rating}</div>
              <div style={{ fontSize: "smaller" }}>{music.trait}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
