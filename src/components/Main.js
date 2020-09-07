import React from "react"
import Product from "./Product.js"
import mainProducts from "../components/products/mainProducts.js"
import "./Main.css"


function Main(){
    const productsInHome = mainProducts.map(item=> <Product item={item}/>)

    return(
        <main id="main" > 
        {productsInHome}
        </main>
    )
}
export default Main