import React from "react";

const NewNavbar = () => {
  return (
    <div className="px-6 pt-6 pb-4 relative z-50 bg-transparent">
      <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto gap-y-6">
        {/* Kartlar w-40 (160px) ve yüksekliği h-36 */}
        <a href="#deniz" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://www.lojiblog.com/wp-content/uploads/2016/12/shutterstock_432945115-750x500.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Denizcilik</h3>
            </div>
          </div>
        </a>

        <a href="#maden" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://www.petroturk.com/wp-content/uploads/2022/09/madencilik.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Madencilik</h3>
            </div>
          </div>
        </a>

        <a href="#kimya" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://acesprocess.com/admin2023/site/assets/files/1114/kimya_uretim_tesisi.750x0-is.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Kimya</h3>
            </div>
          </div>
        </a>

        <a href="#enerji" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://gelecekbilimde.net/wp-content/uploads/2022/11/enerji-cesitleri-nedir.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Enerji</h3>
            </div>
          </div>
        </a>

        <a href="#petrol" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://image.hurimg.com/i/hurriyet/75/0x0/67c16eb44038c948ab8984a1.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Petrol & Gaz</h3>
            </div>
          </div>
        </a>

        <a href="#otomotiv" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://bucaotomasyon.com.tr/wp-content/uploads/2024/01/Endustriyel-Otomasyonun-1-1170x684.webp)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Otomotiv</h3>
            </div>
          </div>
        </a>

        <a href="#demircelik" className="block group rounded-xl overflow-hidden shadow-md w-40 h-36">
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `url(https://st4.depositphotos.com/35602554/38405/i/450/depositphotos_384053732-stock-photo-chimneys-big-heating-plant-powerhouse.jpg)`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h3 className="text-white font-semibold text-sm text-center px-2">Demir Çelik</h3>
            </div>
          </div>
        </a>

        
   

        
      </div>
    </div>
  );
};

export default NewNavbar;
