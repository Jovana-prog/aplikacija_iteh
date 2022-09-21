//KOMPONENTA NAVIGACIONOG MENIJA
//NJU CEMO POZVATI POSLE U APP KOMPONENNTI
//koristimo samo funkcionalne komponenete(preko rfce precice)
//i ovde iportujemo ikonicu koju posle pozivamo u returnu funkcije(bukv kao obican div)
import {AiOutlineShoppingCart} from "react-icons/ai";
import React from 'react';
import {Link} from "react-router-dom";
//koristimo link da nam ne bi ucitavalo svaku stranicu opet, jer React je sve na jednoj stranici(jedan root u index.js)

//prihvatamo cartNum koji smo poslalai iz App komponente, kao parametar fje u zagradi
//prihvatamo kao destrukturirani props
function NavBar({cartNum}) {
  //ne definisemo je ovde nego u App komponenti  samo je prosledjujemo do NavBara
  //const cartNum=0;
  return (
    <div className="navBar">
      <Link to="/" > JOLIE concept store</Link>
      
      <Link  to="/cart" className="cart-items" style={{ position: "absolute",right: 20 }}>
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
        <p className="cart-num">Proizvodi u korpi: {cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;
