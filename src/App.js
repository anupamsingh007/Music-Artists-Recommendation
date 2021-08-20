import React from "react";
import "./styles.css";
import { useState } from "react";

const favMusic = {
  pop: [
    { name: "Justin Bieber" },
    { name: "24kGoldn" },
    { name: "Ariana Grande" }
  ],

  hiphop: [
    {
      name: "Russ"
    },
    {
      name: "Logic"
    },
    {
      name: "J-Cole"
    }
  ],
  Edm: [
    {
      name: "Amelie Lens"
    },
    {
      name: "Lost Stories"
    },
    {
      name: "Avicci"
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
