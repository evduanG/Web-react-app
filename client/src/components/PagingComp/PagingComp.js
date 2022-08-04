import React from "react";
import "./PagingComp.css";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const PagingComp = () => {
  const { pageNumber, setPageNumber, productsList } = useContext(ShopContext);
  const max = Math.floor(productsList.length / 16);
  let pageing = [];
  for (let i = 0; i < max; i++) {
    pageing.push(i);
  }
  if (pageing.length === 1) {
    return <div />;
  } else {
    return (
      <div className="pagination" key="pagination">
        <div className="pagination-item" key="pagination_map">
          {pageing.map((page_i) => {
            if (page_i === Number(pageNumber)) {
              return (
                <div
                  className="pagination-item-current"
                  key="pagination-item-current"
                >
                  {page_i}
                </div>
              );
            } else {
              return (
                <button
                  value={page_i}
                  className="button-page_i"
                  key={`page_i${page_i}button`}
                  onClick={(e) => {
                    setPageNumber(e.currentTarget.value);
                  }}
                >
                  {page_i}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  }
};
export default PagingComp;
