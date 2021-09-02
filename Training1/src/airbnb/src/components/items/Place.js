import React from "react";
import './Place.css'

export default function Place(props) {
  const { urlImg, name, driveTime } = props;
  return (
    <div className="place row">
      <div className="col">
        <img src={urlImg} alt="place-img" />
      </div>
      <div className="col content">
        <div className="place_name">{name}</div>
        <div className="drive_time">{driveTime}</div>
      </div>
    </div>
  );
}
