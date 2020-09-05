import React from "react"
import $ from 'jquery'
import "./Menu.css"
import { Link } from 'react-router-dom'
import {IoIosCloseCircle} from 'react-icons/io'

function handleClick(){
        $("#menu").animate({width:"-=250px"}, 500)
}

function Menu(){
    return(
    <div id="menu">
        <IoIosCloseCircle id="closeBtn" onClick={handleClick}/> 
        <div className="dropDown">
             <Link to="/" className="menuSection">INREDNING</Link>
                <div className="dropDown-content">
                <Link to="/">VASER</Link>
                <Link to="/">TAVLOR & RAMAR</Link>
                <Link to="/">DOFTLJUS & DOFTPINNAR</Link>
                <Link to="/">LYKTOR</Link>
                <Link to="/">HEMTEXTIL</Link>
                <Link to="/">ÖVRIG INREDNING</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/" className="menuSection">KÖK</Link>
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
             <Link to="/" className="menuSection">BARN</Link>
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
             <Link to="/" className="menuSection">ÄNGLAR</Link>
                <div className="dropDown-content">
                <Link to="/">GLAS</Link>
                <Link to="/">DEKORATION</Link>
                <Link to="/">INREDNING</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/" className="menuSection">BADRUM & HUDVÅRD</Link>
                <div className="dropDown-content">
                <Link to="/">HURVÅRD</Link>
                <Link to="/">MASSAGEOLJA</Link>
                <Link to="/">TVÅL</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/" className="menuSection">ACCESSOARER</Link>
                <div className="dropDown-content">
                <Link to="/">SMYCKEN</Link>
                <Link to="/">VÄSKOR</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/" className="menuSection">HÖGTIDER</Link>
                <div className="dropDown-content">
                <Link to="/">JUL</Link>
                <Link to="/">PÅSK</Link>
                <Link to="/">MORSDAG</Link>
                <Link to="/">FARDAG</Link>
                </div>
        </div>
        <div className="dropDown">
             <Link to="/" className="menuSection">ERBJUDANDE</Link>
                <div className="dropDown-content">
                <Link to="/">50%</Link>
                <Link to="/">UNDER 99 KR</Link>
                </div>
        </div>

    </div>
    )
     
    
}
export default Menu