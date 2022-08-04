import "./Loader.css";
import React from "react";
const Loader = () => {
  console.log("Loader is active");
  return (
    <div className="loaderWarp">
      {" "}
      <div className="loader" />
    </div>
  );
};
export default Loader;
