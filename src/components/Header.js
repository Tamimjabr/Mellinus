import React from "react"
import "./Header.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GiPresent} from "react-icons/gi"
import { Link } from "react-router-dom"

function Header(){
    return(
        <haeder id="header">
             <Link to="/" id="mellinus">
             <p>Mellinus<br/><GiPresent/> Present</p>
            </Link>
            <div  id="search">
             <input name="search" type="text" placeholder="Sök bland våra produkter"/>   
            </div>
            <div>
            <AiOutlineShoppingCart id="shoppingCart"/>
            </div>      
        
    </haeder>
    )
     
    
}
export default Header