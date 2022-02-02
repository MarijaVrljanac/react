import React from "react";
import Proizvod from "./Proizvod";

const Korpa = ({products}) => {
    return (
      <div className="cart-container">
          <h3>This is your cart.</h3>
          {products.map((prod)=> (
            <Proizvod product={prod} key={prod.id} inCart={0}/>
          ))}
      </div>
    );
  };

export default Korpa
