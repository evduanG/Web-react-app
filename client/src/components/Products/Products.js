import "./Products.css";
import Product from "../Product/Product";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import PagingComp from "../PagingComp/PagingComp";
const Products = () => {
  const { showProducts, productsList } = useContext(ShopContext);

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
              subcategory={item.subcategory}
            />
          );
        })}
      </div>
      <PagingComp />
    </div>
  );
};
export default Products;
