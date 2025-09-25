

import React from 'react';
import './Footer.css';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

function Footer() {
  return (
    <>
      <footer>
        <div className='fcontainer'>
          <div className='fsec logo logo-with-text'style={{ marginTop: "20px" }}>
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="company-name">Dena Teknik Sanayi Ticaret A.Ş.</p>
          </div>

          <div className='fsec contact'>
            <h2>İLETİŞİM</h2>
            <ul className='finfo'>
              <li>
                <span><FontAwesomeIcon icon={faPhone} className="ficon" /></span>
                <p><a href='tel:+0232 332 15 40' className='contact-link'>0232 332 15 40</a></p>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faEnvelope} className="ficon" /></span>
                <p><a href='mailto:info@denateknik.com' className='contact-link'>info@denateknik.com</a></p>
              </li>
            </ul>

            <ul className='fsci'>
              <li><a href='https://tr.linkedin.com/company/dena-tekni̇k'><FontAwesomeIcon icon={faLinkedinIn} className="ficon" /></a></li>
              <li><a href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x14b97dfd87f0a061:0x14b5f4d1330a174f?sa=X&ved=1t:8290&ictx=111'><FontAwesomeIcon icon={faLocationDot} className="ficon" /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <hr className="footer-line" />
          <p className="copyright">© 2025 Dena Teknik A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
