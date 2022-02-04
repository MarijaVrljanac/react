//arrow function komponenta
//precica rafce
import React from "react";
import { useState } from "react";
import Proizvod from "./Proizvod.jsx";

const Proizvodi = ({products, onAdd, sumPrice, onDelete}) => {
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
  
      const [sort, setSort] = useState(true);
      function sortAsc(){
        
        setSort(true);
      }
      function sortDesc(){
        
        setSort(false);
      }


  return (
    <div className="all-products">
<div className="buttons">
        <button className="sortbtnA" onClick={sortAsc}>▲</button>
        <button className="sortbtnB" onClick={sortDesc}>▼</button>
      </div>
        <div className="all-products">
              {sort === true ? (
                <>
                {products
                  .sort((a, b) => a.price < b.price ? -1 : 1)
                  .map((prod) => (
    
                    <Proizvod product={prod} key={prod.id} onAdd={onAdd} inCart={1} onDelete={onDelete} sumPrice={sumPrice}/>
                  
             ))}
                </>

              ):(
                <>
                   {products
                  .sort((a, b) => a.price < b.price ?  1 : -1)
                  .map((prod) => (
    
                    <Proizvod product={prod} key={prod.id} onAdd={onAdd} onDelete={onDelete} sumPrice={sumPrice} inCart={1}/>
                  
                  ))}
                </>
              )}




             

        </div>
        {/* {products.map((prod)=> ( 
        <Proizvod product={prod} key={prod.id} onAdd={onAdd} inCart={1} onDelete={onDelete}/>
        ))} */}

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
