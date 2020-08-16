import React from "react"
import {IoLogoYoutube} from "react-icons/io"
import {GrInstagram} from "react-icons/gr"
import {FaFacebookSquare} from "react-icons/fa"
import "./Footer.css"

function Footer(){
    return(
        <div id="contact">        
              <div id="information">
                <h3>Mellinus Present<br/>
                Södra Nissastigen 3<br/>
                 333 32 Smålandsstenar
                </h3>
               <a href="https://www.youtube.com/channel/UCjhR4gCJHKhxl8bjVWTgUbQ?view_as=subscriber"><IoLogoYoutube className="socialIcon youtube"/></a>
            <a href="https://www.instagram.com/mellinus/"><GrInstagram className="socialIcon instagram"/></a>
            <a href="https://www.facebook.com/Mellinus-present-222360307945198/?ref=page_internal&eid=ARDEeQe6OzVvmQw6le6OYiQXngLXHr8eNbwcN_9L3qQ3GMKH2NDNLv7JGjI-0djDrhtUHvqAIqPie2tI&hc_ref=ARSV0xquUiirVDpgLFX5NlZRAOQEdEI6hRut0CcESlRSSI864tQvS1O5Q32b_CH5MMo&fref=nf&__xts__[0]=68.ARCcgacYBS8ZEb_7_InGSKB_P4w-5EW7IPWHR2Dw_IYmnLHZxupVUxc2yk-lt5x6zvUYqZq1lBpOQD3oR8ynbPE58uWiOh_ga_ZHFnOSgrDYFNY6tI9lfcotsxqg9UKJkNF_n8RU0amnWu3CM-HKdPZX2TrHQxShyGWO0hrNyfHe8QFz63vNVOSHxtg_Mi9Px1vujtqHJn0hEeUs8Wsx2yhhnhRcVfLOVjfGHsqAsTRD7g8H1Q7ZoWB7BZr2WHfv1Oid81FLol3RjW1YgGcdBUgmK0XF1_TxEIMnfIoi_XmPVHHI1vIJn6ca5a-Sr2qayYNRucpGar8YBN_ulFp2NLwnbw&path=%2FMellinus-present-222360307945198%2F"><FaFacebookSquare className="socialIcon envelope"/></a>      
              </div>
              <div id="workTime">
                  <h3> Öppettider <br/>
                    Tis - fre: 11.00 - 18.00<br/>
                    Lör: 10.00 - 14.00<br/>
                    Sön: Stängt
                  </h3>
              </div>

              <div class="mapouter">

                  <div class="gmap_canvas">
                      <iframe width="570" height="254" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=mellinus%20sm%C3%A5landsstenar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                          </iframe>
                          </div>
                 </div>
            
            </div>
    )
}
export default Footer