import React from "react"
import "./Header.css"
import {BsSearch} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GiPresent} from "react-icons/gi"
import { Link } from "react-router-dom"

function Header(){
    return(
        <div id="header">

            <Link to="/" id="mellinus">
             <p>Mellinus<br/><GiPresent/> Present</p>
            </Link>
            <div>  <BsSearch/> Sök </div>

            <div >
          
            <AiOutlineShoppingCart id="shoppingCart"/>
            </div>      
        
    </div>
    )
     
    
}
export default Header