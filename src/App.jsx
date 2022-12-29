import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";

import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={"Crema De Día"} descripcion={"Con el paso de los años la piel va perdiendo parte de su elasticidad y firmeza. Por suerte, siempre hay un cuidado para vos dentro de la amplia gama de cremas de LOreal Paris. Con el tratamiento adecuado podrás reavivar el tono, devolver elasticidad y volumen o reducir las arrugas de tu rostro. ¡Consigue una piel visiblemente más joven!"}/>
    </div>
  );
}

export default App;
