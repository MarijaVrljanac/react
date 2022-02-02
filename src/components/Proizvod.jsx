import React from "react";
//stavljamo {} zato sto zelimo tacno tu ikonicu
import {BsPlusLg, BsDashLg} from "react-icons/bs";

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS, obavezno {{duple viticaste zagrade}}




// function Proizvod(props) {

//DESTRUKTUIRANJE PROPS
function Proizvod({product, onAdd, onDelete, inCart}){


    const stil = { margin: 1 + "em", borderStyle: "dotted" };
    // console.log(props);

    // function onAdd(title){
    //     console.log("Dodat proizvod: "+title);
    // }

    // if(inCart === 1){
    //   console.log("Uradi nesto.");
    // }else{
    //   console.log("Uradi nesto drugo.");
    // }
    // <=>
    // inCart===1 ? console.log("Uradi nesto.") : console.log("Uradi nesto drugo.");


    return (
    <div className={inCart===1 ? "card" : "card-cart"} style={stil}>
      <img className={inCart===1 ? "card-img-top" : "card-img-left"} src="https:/picsum.photos/200" alt="Slika"></img>
      <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
      </div>
      {/* <button className="btn" onClick={() => onAdd(product.title)}> */}
      
      {inCart === 1 ? (
        <>
          <button className="btn" onClick={() => onAdd(product.title, product.id)}>
            <BsPlusLg />
          </button>
          <button className="btn" onClick={() => onDelete(product.title, product.id)}>
            <BsDashLg />
          </button>
        </>
      ) : (
      <h3>Amount: {product.amount}</h3>
      
      )}
    </div>
  );
  
}

export default Proizvod
