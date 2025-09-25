import React from "react";
import "./../../src/App.css";
import logo from '../logo.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  
  return (
    
    <div>
      
      <header>
         <Link to="/"> <img className="logo" src={logo} alt="Logo" /></Link>
          <nav>
            <ul className="nav__links">
                <li>
                <a href="/Hakkimizda">Hakkımızda</a>
              </li>
              <li>
                <a href="/Segment">Segmentler</a>
              </li>
              <li>
                <a href="/Referans">Referanslarımız</a>
              </li>
              <li>
                <a href="/Katalog">Katalog</a>
              </li>
              <li>
                <a href="/İletisim">İletişim</a>
              </li>
            </ul>
          </nav>
        </header>
    </div>
  );
}


export default Header;
