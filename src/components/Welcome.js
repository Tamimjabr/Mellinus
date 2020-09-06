import React from "react"
import "./Welcome.css"
/*import valkommeVid from "../video/valkommeVid.mp4"*/
import welcome from "../images/welcome.gif"


function Welcome(){
    return(
        <div id="welcome" >
            <img src={welcome} alt="welcome to Mellinus"/>            
        </div>
    )
}
export default Welcome
/*alternativ to use video */
/*<video  src={valkommeVid} autoPlay> Your browser does not support this video</video>           */