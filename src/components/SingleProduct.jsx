import React from 'react'

import {AiFillMinusCircle} from "react-icons/ai";


function SingleProduct({product, onAdd,onMinus, inCart}) {

  return (
    <div className={inCart===1?"card":"card-cart"} style={{margin:15,borderStyle:"double", borderWidth:3,borderColor:"palevioletred"}}>
      <img className='card-img-top' src={product.imageLink} alt="neka slika" />
      <div className="card-body">
        <h3 className='card-title'> {product.title} </h3>

        <p className='card-text'>{product.description} </p>
      </div>
            
        {inCart===1? 
        <><button className='btn' onClick={() => onAdd(product.id)}>Dodaj</button>
        <button className='btnmINUS' onClick={() => onMinus(product.id)} style={{borderColor:"red",borderWidth:2,color:"red"}}>
        <AiFillMinusCircle></AiFillMinusCircle></button></>:
        (<h5>Kolicina: {product.amount}</h5>) }
        
     
     
    </div>
  );
}

export default SingleProduct
