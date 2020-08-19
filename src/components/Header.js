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

            <Link to="/" id="smaland">Butiken i Smålandsstenar
            </Link>

            <div >
            <BsSearch/> Sök
            <AiOutlineShoppingCart id="shoppingCart"/>
            </div>      
        
    </div>
    )
     
    
}
export default Header