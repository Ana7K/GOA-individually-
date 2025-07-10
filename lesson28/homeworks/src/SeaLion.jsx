import React from "react";
import "./lomi.css";

export default function ZgvisLomi({ title, text, image }) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="info">
        <article>{text}</article>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}
