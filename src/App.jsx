import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import data from "./data.json";

function App() {
  // const {data}=data

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/:id" element={<ItemDetailContainer data={data} />} />       
      </Routes>
    </div>
  );
}

export default App;
