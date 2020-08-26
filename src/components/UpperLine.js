import React from "react"
import "./UpperLine.css"
import {FcShipped} from "react-icons/fc"

function UpperLine(){
    return(
        <div>
        <div id="upperLine">
            <div>Vi skickar till: Sverige, Danmark</div>
            <div><FcShipped/>Frakt 59 kr</div>
            <div>Fraktfritt över 500 kr inom Sverige</div>      
 
        </div>

        <hr id="upperLineHr"/>

        </div>
    )
     
    
}
export default UpperLine