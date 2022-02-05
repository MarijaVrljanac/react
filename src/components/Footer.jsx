import React from "react";
import {FaFacebookSquare} from "react-router-dom";
import {BsNewspaper } from "react-icons/bs";
import {Link} from "react-router-dom";
 
function Footer( ) {
    return (
        <div className="footer">
        <div className="footerItem">
        
            <ul>
            <strong>Pretplata na naš Newsletter: </strong> 
            <li className="footerlink"><BsNewspaper/><Link to="/newsletter" className="footerlink"> Newsletter </Link></li>
               <li>2022 Victoria's Secret</li>
                <li>Terms of Use |
                    Privacy & Security |
                    California Privacy Rights |
                    Careers |
                    SSL Secure Checkout |
                    Product Catalog 
                </li>
               
            </ul>
        </div>
        
      
    </div>
      );
}
export default Footer;