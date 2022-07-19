import Hero from "../components/Hero/Hreo";
import Products from "../components/Products/Products";
const AlcoholCatgury = ({ alcoholCatgury, image, productsList }) => {
  const products = productsList.filter(
    (item) => item.subcategory === alcoholCatgury
  );

  return (
    <div>
      <h1>{alcoholCatgury}</h1>
      <Hero title={alcoholCatgury} sort={false} />
      <Products productsList={products} />
    </div>
  );
};
export default AlcoholCatgury;
