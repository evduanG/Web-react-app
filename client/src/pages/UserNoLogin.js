import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserNoLogin = () => {
  let navigate = useNavigate();
  console.log("UserNoLogin");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Sorry ! The site is currently under construction</h1>
    </div>
  );
};
export default UserNoLogin;
/*
 */
