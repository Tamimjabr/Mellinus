import React from "react"
import "./Menu.css"
import { Link } from 'react-router-dom'

function Menu(){
    return(
    <div id="menu">
        <div className="dropDown">
             <Link to="/">INREDNING</Link>
                <div className="dropDown-content">
                <Link to="/">VASAR</Link>
                <Link to="/">TAVLOR & RAMAR</Link>
                <Link to="/">DOFTLJUS & DOFTPINNAR</Link>
                <Link to="/">LYKTOR</Link>
                <Link to="/">HEMTEXTIL</Link>
                <Link to="/">ÖVRIG INREDNING</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">KÖK</Link>
                <div className="dropDown-content">
                <Link to="/">BURKAR</Link>
                <Link to="/">TEXTIL</Link>
                <Link to="/">MUGGAR & KOPPAR</Link>
                <Link to="/">PORSALIN</Link>
                <Link to="/">GLAS</Link>
                <Link to="/">SKÅLAR & FORMAR</Link>
                <Link to="/">ÖVRIGT KÖK</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">BARN</Link>
                <div className="dropDown-content">
                <Link to="/">MJUKA DJUR</Link>
                <Link to="/">TRÄLEKSAKER</Link>
                <Link to="/">SPEL & PUSSEL</Link>
                <Link to="/">PYSSEL</Link>
                <Link to="/">BARNRUM</Link>
                <Link to="/">DOPTIPS</Link>
                <Link to="/">SMYCKEN</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">ÄNGLAR</Link>
                <div className="dropDown-content">
                <Link to="/">BARN</Link>
                <Link to="/">ÄNGLAR</Link>
                <Link to="/">BADRUM & HUDVÅRD</Link>
                <Link to="/">ACCESSOARER</Link>
                <Link to="/">HÖGTIDER</Link>
                <Link to="/">ERBJUDANDE</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">BADRUM & HUDVÅRD</Link>
                <div className="dropDown-content">
                <Link to="/">BARN</Link>
                <Link to="/">ÄNGLAR</Link>
                <Link to="/">BADRUM & HUDVÅRD</Link>
                <Link to="/">ACCESSOARER</Link>
                <Link to="/">HÖGTIDER</Link>
                <Link to="/">ERBJUDANDE</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">ACCESSOARER</Link>
                <div className="dropDown-content">
                <Link to="/">BARN</Link>
                <Link to="/">ÄNGLAR</Link>
                <Link to="/">BADRUM & HUDVÅRD</Link>
                <Link to="/">ACCESSOARER</Link>
                <Link to="/">HÖGTIDER</Link>
                <Link to="/">ERBJUDANDE</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">HÖGTIDER</Link>
                <div className="dropDown-content">
                <Link to="/">BARN</Link>
                <Link to="/">ÄNGLAR</Link>
                <Link to="/">BADRUM & HUDVÅRD</Link>
                <Link to="/">ACCESSOARER</Link>
                <Link to="/">HÖGTIDER</Link>
                <Link to="/">ERBJUDANDE</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/">ERBJUDANDE</Link>
                <div className="dropDown-content">
                <Link to="/">BARN</Link>
                <Link to="/">ÄNGLAR</Link>
                <Link to="/">BADRUM & HUDVÅRD</Link>
                <Link to="/">ACCESSOARER</Link>
                <Link to="/">HÖGTIDER</Link>
                <Link to="/">ERBJUDANDE</Link>
                </div>
        </div>

    </div>
    )
     
    
}
export default Menu