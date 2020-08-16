import React from "react"
import "./Menu.css"
import { Link } from 'react-router-dom'

function Menu(){
    return(
    <div id="menu">
        <Link to="/">kategori 1</Link>
        <Link to="/">kategori 2</Link>
        <Link to="/">kategori 3</Link>
        <Link to="/">kategori 4</Link>
        <Link to="/">kategori 5</Link>
        <Link to="/">kategori 6</Link>
        <Link to="/">kategori 7</Link>
    </div>
    )
     
    
}
export default Menu