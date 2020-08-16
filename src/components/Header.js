import React from "react"
import "./Header.css"
import {BsSearch} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Header(){
    return(
        <div id="header">
            <div id="Mellinus">
             <p>Mellinus Present</p>
            </div>   
            <div >
            <BsSearch/> Sök
            <AiOutlineShoppingCart id="shoppingCart"/>
            </div>      
        
    </div>
    )
     
    
}
export default Header