//sve komponente koje koristimo moramo da iportujemo u ovoj glavnoj
//ona ekstenzija na hromu za react ofc da ne radi
//importujemo i css da bi on znao da moze da ga koristi
//ako glavna komponenta ima pristup cssu onda i sporedne imaju pristup svemu
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';

import{useState} from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";




function App() {

  const [cartNum,setCartNum]=useState(0);
  const[cartProduct,setCartProduct]=useState([]);
  const [products, setProducts] = useState([ 
    {
      id: 1,
      title: "MINI TORBICA",
      description:
        "2990,00 din",
      amount: 0,
      imageLink: "https://static.zara.net/photos///2022/V/1/1/p/6473/910/056/2/w/563/6473910056_6_2_1.jpg?ts=1649415880256"
      
    },
    {
      id: 2,
      title: "MANJA TORBICA",
      description:
        "2600,00 din",
      amount: 0,
      imageLink:"https://static.zara.net/photos///2022/V/1/1/p/6334/910/050/2/w/563/6334910050_6_4_1.jpg?ts=1645110607824"
    },
    {
      id: 3,
      title: "METALIK",
      description:
        "3490,00 din",
      amount: 0,
      imageLink:"https://static.zara.net/photos///2022/I/1/1/p/6341/010/050/2/w/563/6341010050_6_5_1.jpg?ts=1655903984377"
    },
    {
      id: 4,
      title: "CITY TORBICA MINI",
      description:
        "3190,00 din",
      amount: 0,
      imageLink:"https://static.zara.net/photos///2022/I/1/1/p/6340/010/060/2/w/563/6340010060_6_4_1.jpg?ts=1657102871962"
    }]);


  function refreshCart(){
    console.log(products)
    let newProducts=products.filter((prod)=>prod.amount>0);
    {console.log("cart products")}
    console.log(newProducts)
    setCartProduct(newProducts);
  }



  function addProduct(id){
    setCartNum(cartNum+1);
    products.forEach((prod)=>{
      if(prod.id===id){
        prod.amount=prod.amount+1;
        //setProducts(prod.amount+1);
      }
    });
    setProducts(products);
   refreshCart();
  }

  function removeProd(id){
    setCartNum(cartNum-1);
    products.forEach((prod)=>{
      if(prod.id===id){
        prod.amount=prod.amount-1;
      }
    });
    setProducts(products);
   refreshCart();
   
  }
  return (
    <BrowserRouter className="App">

  <NavBar cartNum={cartNum}></NavBar>
  

  <Routes>
    <Route path='/' element={<Products products={products} onAdd={addProduct} onMinus={removeProd}></Products>}></Route>
    <Route path='/cart' element={<Cart Cartproducts={cartProduct}></Cart>}></Route>
  </Routes>
  
 
    </BrowserRouter>
  );
}

export default App;
