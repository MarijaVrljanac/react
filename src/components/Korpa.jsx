import React from "react";
import Proizvod from "./Proizvod";

const Korpa = ({products}) => {
    return (
      <div className="cart-container">
          <h3><font color="white">Vaša korpa:</font></h3>
          {products.map((prod)=> (
            <Proizvod product={prod} key={prod.id} inCart={0}/>
          ))}
      </div>
    );
  };

export default Korpa
