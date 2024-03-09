import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/Shopcontext";
const Productdisplay = (props) => {
  const { product } = props;
  const {addtoCart}= useContext(ShopContext);
  // console.log(product, "Disp");
  return (
    <div className="productdisplay">
      <div className="productdisplay_left">
        <div className="productdisplay_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="prosuctdisplay_img">
          <img className="prosuctdisplay_main_img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="productdisplay_right_price">
          <div className="productdisplay_right_price_old">
            ${product.old_price}
          </div>
          <div className="productdisplaay_righ_price_new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay_right_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptatum autem totam et necessitatibus ipsa nulla. Atque natus,
          reiciendis, iste excepturi eos harum laborum dicta velit, laudantium
          fugit accusamus tenetur!
        </div>
        <div className="productdisplay_right_size">
          <h1>select size</h1>
          <div className="productdisplay_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXl</div>
          </div>
        </div>
        <button onClick={()=>(addtoCart(product.id))}>ADD TO CART</button>
        <p className="productdisplay_right_category"><span> Category :</span>Women, T-shirt,Crop Top</p>
        <p className="productdisplay_right_category"><span> Tags :</span>Modern, Latest</p>

      </div>
    </div>
  );
};

export default Productdisplay;
