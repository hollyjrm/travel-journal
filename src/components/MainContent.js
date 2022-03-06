import React from "react";

export default function (props) {
  return (
    <div className="container">
      <div className="card">
        <div className="image-cont">
          <img src={`images/${props.image}`} className="card-image"></img>
        </div>
        <div className="card-info">
          <p>
            {props.country}{" "}
            <a target="_blank" className="links" href={props.googleMaps}>
              View on Google Maps
            </a>
          </p>
          <h1>{props.placeName}</h1>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
