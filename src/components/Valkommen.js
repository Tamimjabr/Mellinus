import React from "react"
import "./Valkommen.css"
import MELLINUS from "../video/MELLINUS.mp4"


function Valkommen(){
    return(
        <div id="valkommen" >
            <video  src={MELLINUS} autoPlay> Your browser does not support this video</video>           
        </div>
    )
     
    
}
export default Valkommen