import React from "react"
import "./Valkommen.css"
import valkommeVid from "../video/valkommeVid"


function Valkommen(){
    return(
        <div id="valkommen" >
            <video  src={valkommeVid} autoPlay> Your browser does not support this video</video>           
        </div>
    )
     
    
}
export default Valkommen