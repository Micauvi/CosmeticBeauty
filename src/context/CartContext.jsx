import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addProduct = (item, newQuantity) => {
    const foundProduct = cart.find(prod => prod.item.id === item.id);
    if (!foundProduct) {
      setCart([...cart, { item, quantity: newQuantity }]);
      return { item, quantity: newQuantity };
    } else {
      const updatedProduct = { item, quantity: foundProduct.quantity + newQuantity };
      setCart([...cart.filter(prod => prod.item.id !== item.id), updatedProduct]);
      return updatedProduct;
    }
  };
  
  console.log("carrito:", cart);

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const removeProduct = (id) => setCart(cart.filter(product.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
