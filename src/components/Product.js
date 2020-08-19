import React from "react"
import {Link} from "react-router-dom"
import "./Product.css"
import "./products/mainProducts.js"




function Product(props){
    return(
        <div id="product"> 
        <Link to={props.item.link}><div id={props.item.id}> </div>
        </Link>
        <div id="details" >
        <div>
        <p>art-nr:{props.item.art} <br/>
        <b>Pris: {props.item.price} kr</b></p> </div>
        <button>Köp</button> </div>
        </div>
    )
}
export default Product