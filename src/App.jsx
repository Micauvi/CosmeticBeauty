import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartProvider from "./context/CartContext";
import Cart from "./components/ItemCart/Cart";
import "./firebase/config";
import FormPay from "./components/buyForm";

function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/form" element={<FormPay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Header />} />
          <Route
            path="/category/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/:detailId" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
