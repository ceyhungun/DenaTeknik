import React from "react";
import logo from "../logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 

export default function Maintenance() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-black z-50 p-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="mb-6 w-80 drop-shadow-lg"
      />

      {/* Başlık */}
      <h1 className="text-4xl font-bold mb-4 text-center drop-shadow-md">
        🚧 Sitemiz Bakımda 🚧
      </h1>

      {/* Açıklama */}
      <p className="text-lg text-center max-w-lg drop-shadow-md">
        Sizin için daha iyi bir deneyim hazırlıyoruz.  
        Kısa süre içinde tekrar burada olacağız! 🙌
      </p>

      {/* Footer */}
      <div className="mt-10 flex gap-6 items-center">
        <a 
          href="https://www.instagram.com/denateknik/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-pink-500 transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a 
          href="https://tr.linkedin.com/company/dena-tekni̇k" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a 
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14b97dfd87f0a061:0x14b5f4d1330a174f?sa=X&ved=1t:8290&ictx=111" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-green-600 transition-colors"
        >
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
        </a>
      </div>

      <p className="mt-2 text-sm text-gray-600 drop-shadow-sm">
        © {new Date().getFullYear()} Tüm Hakları Saklıdır
      </p>
    </div>
  );
}

