import React from "react";
import {BsNewspaper} from "react-icons/bs";
 
function Newsletter() {
    return (
        <div id='newsletter' >
            <div id='container1'>
                <div id='newsletter-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2 className="nl">Pretplatite se na naš Newsletter</h2>
                        <input type="text" className='field' placeholder='Ime' required/>
                        <input type="email" className='field' placeholder='E-mail' required/>
                        <input type="text" className='field' placeholder='Naslov'/>
                        <textarea className='field area' placeholder='Poruka'></textarea>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
