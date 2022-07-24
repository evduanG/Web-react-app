import React from "react";
import "./FakeAdvertisement.css";
import "./only today.mp4";

const FakeAdvertisement = () => {
  return (
    <div className="fake-advertisement">
      <video width="200" height="300" autoPlay muted>
        <source src="./only today.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default FakeAdvertisement;
