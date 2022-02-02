//arrow function komponenta
//precica rafce
import React from "react";
import Proizvod from "./Proizvod.jsx";

const Proizvodi = ({products, onAdd}) => {
    // const name="Naziv proizvoda";
    // const desc = "Opis proizvoda";
    // const prod = {
    //     title:"Naziv proizvoda", 
    //     description:"Opis proizvoda."
    // };

    //Arrow functions (INLINE)-> Anonimne funkcije -> nemaju naziv, koristimo ih najcesce kada zelimo samo jednom da nam se izvsi funkcija
    // function (a){
    //     return a + 10;
    // }

//jednostvanije za pisanje
    // (a) => {
    //     return a + 10;
    // }

    // (a) => a + 10;
    


  return (
    <div className="all-products">

        {products.map((prod)=> ( 
        <Proizvod product={prod} key={prod.id} onAdd={onAdd} inCart={1}/>
        ))}

        {/* {products.map((prod)=>{
            return <Proizvod product={prod}/>;
        })} */}
        
        

      {/* <Proizvod product={products[0]}/>
      <Proizvod product={products[1]}/>
      <Proizvod product={products[2]}/> */}
      

    </div>
  );
};

export default Proizvodi
