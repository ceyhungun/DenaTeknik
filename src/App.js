import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./componets/Home";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

import Hakkimizda from "./componets/Hakkimizda";
import Segment from "./componets/Segment";
import Segmentler from "./componets/Segmentler";
import Referans from "./componets/Referans";
import Katalog from "./componets/Katalog";
import İletisim from "./componets/İletisim";
import Maintenance from "./componets/Maintenance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hakkimizda" element={<Hakkimizda/>} />
        <Route path="/Segment" element={<Segment />} />
        <Route path="/Segmentler" element={<Segmentler />} />
        <Route path="/Referans" element={<Referans />} />
        <Route path="/Katalog" element={<Katalog />} />
        <Route path="/İletisim" element={<İletisim />} />
        <Route path="/Maintenance" element={<Maintenance />} />
        </Routes>
    </Router>
  );


}


export default App;
