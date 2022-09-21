import React from 'react'
import SingleProduct from './SingleProduct';



function Products({products, onAdd, onMinus}){

  return (
    <div className='all-products'>
    {console.log("all products")}
      {console.log(products)}
      {products.map(prod=>( 
      <SingleProduct product={prod} key={prod.id} onAdd={onAdd} onMinus={onMinus} inCart={1}> </SingleProduct>))}  

    </div>
  );
};

export default Products
