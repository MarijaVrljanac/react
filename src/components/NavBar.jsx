//function komponenta
//precica rfce
import React from "react";
import { BsCartFill, BsNewspaper } from "react-icons/bs";
import {Link} from "react-router-dom";

function NavBar({cartNum}){
// const cartNum = 0;

    return (
        <div className="navBar">
            <Link to="/"><b>VICTORIA'S SECRET WEB-SHOP</b></Link>
            <BsNewspaper/><Link to="/newsletter" className="navbar-items"> Newsletter </Link>
            <Link to="/cart" className="cart-items">
                <BsCartFill />
                <p className="cart-num">{cartNum}</p>

            </Link>

           
        </div>
        
        
    
        );
}

export default NavBar;