import React from "react"
import "./Product.css"
import cats from"../images/cats.jpg"

function Product(){
    return(
        <div id="product"> 
        <img src={cats} alt="missing"/>     
        <p>art-nr:7979 <br/>
        <b>Pris: 299 kr</b></p>
        <button>Köp</button>      
        </div>
    )
}
export default Product