import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Proizvodi from "./components/Proizvodi";
import Korpa from "./components/Korpa";
import Newsletter from "./components/Newsletter";
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
      image: "https://static2.sabinacdn.com/9339-thickbox_default/bombshell.jpg",
      title: "Bombshell",
      category: "EDP",
      size: "50 ml",
      description:
        "There’s a Bombshell in every woman. The heart of the fragrance blooms with Bombshell’s signature floral, the peony. Madagascan vanilla orchid adds a creamy sweetness.",
      price: "60 €",
      amount: 0,
    },
    {
      id: 2,
      image: "https://assets.goldenscent.com/catalog/product/cache/1/small_image/750x750/9df78eab33525d08d6e5fb8d27136e95/6/6/667538582035-victoria-secret-victoria_s-secret-vanilla-lace-body-mist-_u_-250-ml.jpg",
      title: "Vanilla Lace",
      category: "Mist",
      size: "250 ml",
      description:
        "Discover The Mist Collection. Scents that celebrate all that's individual, unique and of the moment. It's a fragrance adventure, and it starts with you.",
      price: "20 €",
      amount: 0,
    },
    {
      id: 3,
      image: "https://www.dambiro.de/media/image/product/27809/lg/victorias-secret-romantic-body-lotion-236-ml---8-fl-oz.jpg",
      title: "Romantic",
      category: "Losion",
      size: "236 ml",
      description:
        "Nourish with scent. Our fast-absorbing, fragrance lotion with 24-Hour Moisture is perfect for hands and body. Smooth on lotion, then finish with Mist for lasting scent.",
        price: "25 €",
      amount: 0,
    },
    {
      id: 4,
      image: "https://i5.walmartimages.com/asr/f38e882a-7ba1-4aad-9d60-e9743c314985_1.ec606351874da67cbaf7bcfcfb6eebf1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      title: "Angel",
      category: "EDP",
      size: "50 ml",
      description:
        "Nourish with scent. Our fast-absorbing, fragrance lotion with 24-Hour Moisture is perfect for hands and body. Smooth on lotion, then finish with Mist for lasting scent.",
        price: "60 €",
      amount: 0,
    },
    {
      id: 5,
      image: "https://static3.sabinacdn.com/7783-thickbox_default/aqua-kiss-body-mist.jpg",
      title: "Aqua Kiss",
      category: "Mist",
      size: "250 ml",
      description:
        "Discover The Mist Collection. Scents that celebrate all that's individual, unique and of the moment. It's a fragrance adventure, and it starts with you.",
      price: "20 €",
      amount: 0,
    },
    {
      id: 6,
      image: "https://brandsfreaks.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-11-at-1.03.40-PM.jpeg",
      title: "Love Spell",
      category: "Losion",
      size: "236 ml",
      description:
        "Nourish with scent. Our fast-absorbing, fragrance lotion with 24-Hour Moisture is perfect for hands and body. Smooth on lotion, then finish with Mist for lasting scent.",
        price: "25 €",
      amount: 0,
    },
    
  ]);

  function refreshCart(){
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

  // function opis() {
  //   this.state = {
  //     show: false
  //   };
  // }

  // function show() {
  //   this.setState({
  //     show: true
  //   });
  // }

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
      if(prod.amount >= 0){
        prod.amount--;
      }else{
        return;
      }

      
    }
    console.log(prod.amount);
  });
  

  refreshCart();
}


function sumPrice(id, price){
  let sum = 0;

  setCartNum(cartNum + 1);
  // console.log("Broj proizvoda u korpi: "+cartNum);
  products.forEach((prod) => {
    if(prod.id === id){
      prod.amount++;
      sum += prod.price;
    }
    // console.log(prod.amount);
    console.log(sum);
  });
  refreshCart();
}


  return (
      <BrowserRouter className="App">
        <NavBar cartNum={cartNum}></NavBar>
        <Routes>
          <Route 
            path="/"
            element={<Proizvodi products={products} onAdd={addProduct} onDelete={deleteProduct} sumPrice={sumPrice}/>}
          />
          <Route 
            path="/cart" // /cart*prihvata sve putanje; konkretna putanja bi bila npr /cart/:id
            element={<Korpa products={cartProducts}/>}
          />
           <Route path="/newsletter" element={<Newsletter></Newsletter>} />
        </Routes>
        
      </BrowserRouter>
  );     
}

export default App;
