import React from "react";
import $ from "jquery";
import "./Menu.css";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";

function handleClick() {
  $("#menu").animate({ width: "-=250px" }, 500);
}
function handleClick2() {
  //opening the menu
  $("#menu").animate({ width: "+=250px" }, 500);
}

function Menu() {
  return (
    <div>
      <CgMenuRound id="menuIcon" onClick={handleClick2} />
      <nav id="menu">
        <IoIosCloseCircle id="closeBtn" onClick={handleClick} />
        <ul>
          <li>
            INREDNING
            <ul>
              <li>
                <Link to="/">VASER</Link>
              </li>
              <li>
                <Link to="/">TAVLOR & RAMAR</Link>
              </li>
              <li>
                <Link to="/">DOFTLJUS & DOFTPINNAR</Link>
              </li>
              <li>
                <Link to="/">LYKTOR</Link>
              </li>
              <li>
                <Link to="/">HEMTEXTIL</Link>
              </li>
              <li>
                <Link to="/">ÖVRIG INREDNING</Link>
              </li>
            </ul>
          </li>
          <li>
            KÖK
            <ul>
              <li>
                <Link to="/">BURKAR</Link>
              </li>
              <li>
                <Link to="/">TEXTIL</Link>
              </li>
              <li>
                <Link to="/">MUGGAR & KOPPAR</Link>
              </li>
              <li>
                <Link to="/">PORSALIN</Link>
              </li>
              <li>
                <Link to="/">GLAS</Link>
              </li>
              <li>
                <Link to="/">SKÅLAR & FORMAR</Link>
              </li>
              <li>
                <Link to="/">ÖVRIGT KÖK</Link>
              </li>
            </ul>
          </li>
          <li>
            BARN
            <ul>
              <li>
                <Link to="/">MJUKA DJUR</Link>
              </li>
              <li>
                <Link to="/">TRÄLEKSAKER</Link>
              </li>
              <li>
                <Link to="/">SPEL & PUSSEL</Link>
              </li>
              <li>
                <Link to="/">PYSSEL</Link>
              </li>
              <li>
                <Link to="/">BARNRUM</Link>
              </li>
              <li>
                <Link to="/">DOPTIPS</Link>
              </li>
              <li>
                <Link to="/">SMYCKEN</Link>
              </li>
            </ul>
          </li>
          <li>
            ÄNGLAR
            <ul>
              <li>
                <Link to="/">GLAS</Link>
              </li>
              <li>
                <Link to="/">DEKORATION</Link>
              </li>
              <li>
                <Link to="/">INREDNING</Link>
              </li>
            </ul>
          </li>
          <li>
            BADRUM & HUDVÅRD
            <ul>
              <li>
                <Link to="/">HURVÅRD</Link>
              </li>
              <li>
                <Link to="/">MASSAGEOLJA</Link>
              </li>
              <li>
                <Link to="/">TVÅL</Link>
              </li>
            </ul>
          </li>
          <li>
            ACCESSOARER
            <ul>
              <li>
                <Link to="/">SMYCKEN</Link>
              </li>
              <li>
                <Link to="/">VÄSKOR</Link>
              </li>
            </ul>
          </li>
          <li>
            HÖGTIDER
            <ul>
              <li>
                <Link to="/">JUL</Link>
              </li>
              <li>
                <Link to="/">PÅSK</Link>
              </li>
              <li>
                <Link to="/">MORSDAG</Link>
              </li>
              <li>
                <Link to="/">FARDAG</Link>
              </li>
            </ul>
          </li>
          <li>
            ERBJUDANDE
            <ul>
              <li>
                <Link to="/">50%</Link>
              </li>
              <li>
                <Link to="/">UNDER 99 KR</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
