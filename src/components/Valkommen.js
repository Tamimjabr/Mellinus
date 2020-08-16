import React from "react"
import "./Valkommen.css"
import Mellinus from "../video/Mellinus.mp4"


function Valkommen(){
    return(
        <div id="valkommen" >
            <video  src={Mellinus} autoPlay> Your browser does not support this video</video>           
        </div>
    )
     
    
}
export default Valkommen