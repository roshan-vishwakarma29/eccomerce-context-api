import React, { useContext } from "react";
import "./Css/Shopcategoory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/Shopcontext";
import Items from "../Components/Items/Items";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="Shop_category_banner" src={props.banner} alt="" />
      <div className="shopcategory_indexshort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory_sort">
          Short by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop_category_product">
       {
        all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Items id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })
       }
      </div>
      <div className="shope_category_loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
