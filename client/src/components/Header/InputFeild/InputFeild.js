import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "./InputFeild.css";
import ShopContext from "../../../context/ShopContext";
import { useContext } from "react";

import { useSearchParams, Navigate, useNavigate } from "react-router-dom";
import Products from "../../Products/Products";

/**
 *
 */
const InputFeild = () => {
  let navigate = useNavigate();
  const { setSearch, search } = useContext(ShopContext);
  let input = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setSearch(input.current.value);
    input.current.value = "";
    navigate("/search", { replace: true });
  }

  return (
    <form className="input" onSubmit={handleSubmit} autoComplete="on">
      <button className="inpu__submit" type="submit">
        {" "}
        <BsSearch />
      </button>
      <input type="input" placeholder="" className="input__box" ref={input} />
    </form>
  );
};
export default InputFeild;
