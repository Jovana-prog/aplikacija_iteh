import React from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({ Cartproducts }) => {
  return (
    <div className="cart-container">
      <h3 style={{color:"pink"}} >Proizvodi u Vašoj korpi:</h3>
    {console.log("cart products")}
      {console.log(Cartproducts)}
      {Cartproducts.map((prod) => (
        <SingleProduct product={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
};


export default Cart
