import React from 'react'
import { useCartContext } from '../../context/CartContext'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext()
console.log('product:',product)
  return (
    <div>
        <img src={product.imagen} alt="" />
        <div>
            <p>{product.nombre}</p>
            <p>Precio por unidad:${product.precio}</p>
            <p>Subtotal:${product.quantity * product.precio}</p>
            <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}
// const ItemCart = ({product}) => {
//     const {removeProduct} = useCartContext()
  
//     let subtotal = product.quantity * product.item.precio;
//     if (isNaN(subtotal)) {
//       subtotal = 0;
//     }
  
//     return (
//       <div>
//           <img src={product.item.imagen} alt="" />
//           <div>
//               <p>{product.item.nombre}</p>
//               <p>Precio por unidad: ${product.item.precio}</p>
//               <p>Subtotal: ${subtotal}</p>
//               <button onClick={()=> removeProduct(product.item.id)}>Eliminar</button>
//           </div>
//       </div>
//     )
//   }
  

export default ItemCart