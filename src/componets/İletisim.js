


import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Iletisim = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <div style={{ flex: 1, padding: '100px 40px', backgroundColor: '#f9f9f9' }}>
       <div style={{ textAlign: "center", marginBottom: "50px" }}>
  <h1 style={{ 
    fontSize: "36px", 
    fontWeight: "bold", 
    color: "#000", 
    borderBottom: "2px solid #000",
    display: "inline-block",
    paddingBottom: "10px"
  }}>
    İLETİŞİM BİLGİLERİMİZ
  </h1>
</div>


        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
      {/* Servis Merkezi */}
<div
  style={{
    flex: 1,
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
  }}
>
  <h2 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "25px" }}>
    SERVİS MERKEZİ
  </h2>
  <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
    <strong>Adres:</strong> Doğanlar Mahallesi 1422. Sokak No:32 Bornova/İzmir
  </p>
  <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
    <strong>Telefon:</strong> 0232 332 15 40
  </p>
  <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
    <strong>Email:</strong> servis@denateknik.com
  </p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.428342541174!2d27.2580027!3d38.4503473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97ca5c6bb499b%3A0xa73aceefda7cc9!2sDo%C4%9Fanlar%2C%201422.%20Sk.%20No%3A32%2C%2035050%20Bornova%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1694960000000!5m2!1str!2str"
    width="100%"
    height="200"
    style={{ border: "0", borderRadius: "8px", marginTop: "15px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


          {/* Ana Ofis */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#000",
            }}
          >
            <h2 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "25px" }}>
              ANA OFİS
            </h2>
            <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
              <strong>Adres:</strong> Doğanlar Mahallesi 1406. Sokak No: 11/1/31 Bornova/İzmir
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
              <strong>Telefon:</strong> 0232 332 15 40
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px", fontSize: "20px", color: "#000" }} />
              <strong>Email:</strong> info@denateknik.com
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.436831039535!2d28.99193131487924!3d41.0387451792805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97dfd87f0a061%3A0x14b5f4d1330a174f!2s%C3%96rnek%20Mahallesi%2C%20123.%20Sokak%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1683813218226!5m2!1str!2str"
              width="100%"
              height="200"
              style={{ border: "0", borderRadius: "8px", marginTop: "15px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Iletisim;
