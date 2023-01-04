import React from "react";
import "./Location.css";

export default function Location(props) {
  return (
    <div className="location">
      <img className="location--img" src={props.imageUrl} alt="Mount Fuji" />
      <div className="info">
        <div className="locate">
          <img
            className="location--pointer"
            src={require("../../Images/location.png")}
            alt=""
          />
          <span className="location--country">{props.location}</span>
          <a className="location--url" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>

        <h1 className="location--title">{props.title}</h1>
        <p className="location--date">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="location--info">{props.description}</p>
      </div>
    </div>
  );
}

// {
//   title: "Mount Fuji",
//   location: "Japan",
//   googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//   startDate: "12 Jan, 2021",
//   endDate: "24 Jan, 2021",
//   description:
//     "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
// }
