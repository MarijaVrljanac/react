import React from "react";
import Proizvod from "./Proizvod";

const Korpa = ({products}) => {
    return (
      <div className="cart-container">
          <div className="korpaDiv"><h3>Vaša korpa:</h3></div>
          
          {products.map((prod)=> (
            <Proizvod product={prod} key={prod.id} inCart={0}/>
          ))}


      <div className="cenaDiv"><h3>Ukupna cena proizvoda: {products.price}</h3>
          </div>
      </div>

      
    );
  };

export default Korpa
