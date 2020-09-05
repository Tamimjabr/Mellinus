import React from "react"
import $ from 'jquery'
import "./UpperLine.css"
import {FcShipped} from "react-icons/fc"
import {CgMenuRound} from 'react-icons/cg'

function handleClick(){
    //opening the menu
    $("#menu").animate({width:"+=250px"}, 500)
}

function UpperLine(){
    return(
        <div>
            <CgMenuRound id="menuIcon" onClick={handleClick}/>
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