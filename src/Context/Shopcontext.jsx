import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getdefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopcontextProvider = (props) => {
  const [cartitem, setcartitem] = useState(getdefaultCart());
  // console.log(cartitem);
  const addtoCart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartitem);
  };
  const removeFromCart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  const getTotalAmount = (props) => {
    let TotalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        TotalAmount += itemInfo.new_price * cartitem[item];
      }
      return TotalAmount;
    }
    console.log(TotalAmount)
  console.log(getTotalAmount)

  };
  const contextValue = {
    getTotalAmount,
    all_product,
    cartitem,
    addtoCart,
    removeFromCart,
  };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopcontextProvider;
