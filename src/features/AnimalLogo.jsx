import React from "react";


export default function AnimalLogo() {
  return (
    <h2 className="logo" aria-label="DULL logo with cat mark">
      <span className="word">DU</span>

      {/* SVG Cat Mark */}
      <svg
        className="mark"
        role="img"
        aria-label="cat logo"
        viewBox="0 0 42 32"
        fill="none"
      >
        {/* Ears */}
        <polygon points="10,12 16,2 18,13" className="cat-part" />
        <polygon points="32,12 26,2 24,13" className="cat-part" />

        {/* Head */}
        <path
          d="M12 12c0-1 0.8-2 1.8-2h14.4c1 0 1.8 1 1.8 2v7.5c0 5.2-4.4 9.5-9.8 9.5s-9.8-4.3-9.8-9.5V12z"
          className="cat-part"
        />

        {/* Eyes */}
        <circle className="eye" cx="18" cy="18" r="1.6" />
        <circle className="eye" cx="24" cy="18" r="1.6" />

        {/* Nose */}
        <polygon points="20.5,20.5 21.5,22 22.5,20.5" className="nose" />

        {/* Whiskers */}
        <line x1="8" y1="18" x2="14" y2="18" className="whisker" />
        <line x1="8.5" y1="21" x2="14.5" y2="21" className="whisker" />
        <line x1="28" y1="18" x2="34" y2="18" className="whisker" />
        <line x1="27.5" y1="21" x2="33.5" y2="21" className="whisker" />
      </svg>

      <span className="word accent">LL</span>
    </h2>
  );
}
