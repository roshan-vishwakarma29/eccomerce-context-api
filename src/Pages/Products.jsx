import React, { useContext } from "react";
import { ShopContext } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import Productdisplay from "../Components/Productdisplay/Productdisplay";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";
import Relatedproduct from "../Components/Relatedproduct/Relatedproduct";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));
  // console.log(product);
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  );
};

export default Products;
