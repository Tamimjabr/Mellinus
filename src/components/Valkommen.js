import React from "react"
import "./Valkommen.css"
/*import valkommeVid from "../video/valkommeVid.mp4"*/
import welcome from "../images/welcome.gif"


function Valkommen(){
    return(
        <div id="valkommen" >
            <img src={welcome} alt="welcome"/>

            
        </div>
    )
     
    
}
export default Valkommen
/*alternativ to use video */
/*<video  src={valkommeVid} autoPlay> Your browser does not support this video</video>           */