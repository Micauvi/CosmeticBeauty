import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import data from "./data.json";
import CartProvider from "./context/CartContext";
import Cart from "./components/ItemCart/Cart";

function App() {
  // const {data}=data

  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Header />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/:id" element={<ItemDetailContainer data={data} />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
