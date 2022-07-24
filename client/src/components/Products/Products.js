import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import ShopContext from "../../context/ShopContext";
import { useContext } from "react";
const Products = () => {
  const { pageNumber, showProducts, productsList, setPageNumber } = useContext(
    ShopContext
  );
  const max = Math.floor(productsList.length / 20);
  let pageing = [];
  for (let i = 0; i < max; i++) {
    pageing.push(i);
  }
  return productsList.length === 0 ? (
    <div className="no-products" key="no products">
      {" "}
      <h1 key="h-no-products">no products</h1>
    </div>
  ) : (
    <div>
      <div className="products" key="productsContainer">
        {showProducts.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
              Percent={item.Percent}
              caytegory={item.category}
            />
          );
        })}
      </div>
      <div className="pagination" key="pagination">
        <div className="pagination-item" key="pagination_map">
          {pageing.map((page_i) => {
            if (page_i === Number(pageNumber)) {
              return <h3>{page_i}</h3>;
            } else {
              return (
                <button
                  value={page_i}
                  className="button-page_i"
                  key={`page_i${page_i}`}
                  onClick={(e) => {
                    setPageNumber(e.currentTarget.value);
                  }}
                >
                  <h3>{page_i}</h3>
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
