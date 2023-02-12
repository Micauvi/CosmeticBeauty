import React, { useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import Model from "./model";

const FormPay = () => {
  const { cart, totalPrice } = useCartContext();
  const [orderId, setOrderId] = useState("");

  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [emailMatch, setEmailMatch] = useState(false);

  const user = { name: "", email: "", phone: "", address: "" };
  const [buyer, setBuyer] = useState(user);

  const handleConfirmEmailChange = (event) => {
    setConfirmedEmail(event.target.value);
    setEmailMatch(buyer.email === event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyer({ ...buyer, [name]: value });
  };
  const saveData = async (e) => {
    e.preventDefault();
    setBuyer({ ...user });
  };

  const handleClick = () => {
    if (emailMatch) {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    } else {
      alert("Los correos electrónicos no coinciden.");
    }
  };

  const order = {
    buyer,
    items: cart.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };
  const showOrder = () => {
    if (orderId !== "") {
      return <Model orderId={orderId}/>;
    }
  };

  return (
    <>
      {showOrder()}
      {orderId === "" && (
        <div className="container mt-5">
          <h1 className="text-center mb-3">Formulario de Compra</h1>
          <form onSubmit={saveData}>
            <div className="form-group mb-3">
              <label htmlFor="name">Nombre y Apellido:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={buyer.name}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={buyer.email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmedEmail">
                Confirme su correo electrónico:
              </label>
              <input
                type="email"
                id="confirmedEmail"
                name="confirmedEmail"
                value={confirmedEmail}
                onChange={handleConfirmEmailChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={buyer.phone}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={buyer.address}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <input
              className="botones btn-block"
              type="submit"
              value="Enviar"
              onClick={handleClick}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default FormPay;
