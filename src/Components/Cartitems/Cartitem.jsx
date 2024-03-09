import React, { useContext } from "react";
import "./Cartitem.css";
import { ShopContext } from "../../Context/Shopcontext";
import removeicon from "../Assets/cart_cross_icon.png";

// xxxxxxxx
const Cartitem = () => {
  const { all_product,getTotalAmount, cartitem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitem">
      <div className="cartitem_formet_main">
        <p>Product</p>
        <p>Title</p>
        <p>Pricr</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div>
              <div className="cart_item_formet cartitem_formet_main">
                <img src={e.image} className="cartitem_product_icon" alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem_quantity">{cartitem[e.id]}</button>
                <p>${e.new_price * cartitem[e.id]}</p>
                <img
                  className="cartitem_remove_icon"
                  src={removeicon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }} />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem_down">
        <div className="cartitem_total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem_total_item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitem_total_item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="cartitem_total_item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem_promocode">
          <p>if tou have a promo code ,Enter it here</p>
          <div className="cartitem_promobox">
            <input type="text" placeholder="Promo cade" name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
