import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Proizvodi from "./components/Proizvodi";
import Korpa from "./components/Korpa";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Routes je kao switch(), Route je kao case

function App() {
  //sve promenljive idu ovde unutar {} i pre returna
  // const prom = <h3>Pozdrav!</h3>;
  //U Reactu se informacije salju odozgo na dole
  // let cartNum = 0;
  
  //za menjanje vrednosti promenljive useState
  //const [state, setState] = useState(initialState)

  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);



  const [products] = useState([
    {
      id: 1,
      title: "Bombshell",
      category: "EDP",
      size: "50 ml",
      description:
        "There’s a Bombshell in every woman. The heart of the fragrance blooms with Bombshell’s signature floral, the peony. Madagascan vanilla orchid adds a creamy sweetness.",
      amount: 0,
    },
    {
      id: 2,
      title: "Vanilla Lace",
      category: "Mist",
      size: "250 ml",
      description:
        "Discover The Mist Collection. Scents that celebrate all that's individual, unique and of the moment. It's a fragrance adventure, and it starts with you.",
      amount: 0,
    },
    {
      id: 3,
      title: "Romantic",
      category: "Losion",
      size: "236 ml",
      description:
        "Nourish with scent. Our fast-absorbing, fragrance lotion with 24-Hour Moisture is perfect for hands and body. Smooth on lotion, then finish with Mist for lasting scent.",
      amount: 0,
    },
  ]);

  function refreshCart(){
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

function addProduct(title, id){
  console.log("Dodat je proizvod: "+title);
  setCartNum(cartNum + 1);
  // console.log("Broj proizvoda u korpi: "+cartNum);
  products.forEach((prod) => {
    if(prod.id === id){
      prod.amount++;
    }
    console.log(prod.amount);
  });
  refreshCart();

  // products.map((prod) => {
  //   if(prod.id === id){
  //     prod.amount++;
  //   }
  // });
}

function deleteProduct(title, id){
  console.log("Proizvod: "+title+" je uklonjen iz korpe.");
  setCartNum(cartNum - 1);
  // console.log("Broj proizvoda u korpi: "+cartNum);
  products.forEach((prod) => {
    if(prod.id === id){
      prod.amount--;
    }
    console.log(prod.amount);
  });
  refreshCart();
}


  return (
      <BrowserRouter className="App">
        <NavBar cartNum={cartNum}></NavBar>
        <Routes>
          <Route 
            path="/"
            element={<Proizvodi products={products} onAdd={addProduct} onDelete={deleteProduct}/>}
          />
          <Route 
            path="/cart" // /cart*prihvata sve putanje; konkretna putanja bi bila npr /cart/:id
            element={<Korpa products={cartProducts}/>}
          />
        </Routes>
        
      </BrowserRouter>
  );     
}

export default App;
