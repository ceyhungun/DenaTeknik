import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Referans() {
  const sirketler = [
    { ad: "KOÇ Holding", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8Sye6SRxQ_VzHTQZpVGHNcbH9TUA65t5jA&s", url: "https://www.koc.com.tr" },
    { ad: "E.C.A", foto: "https://cdn.kod8.in/1192/9894-822024-153634.png", url: "https://eca.com.tr" },
    { ad: "Sanko Holding", foto: "https://upload.wikimedia.org/wikipedia/tr/d/d2/Sanko_Holding_logo.jpg", url: "https://sanko.com.tr" },
    { ad: "Albioma & Turcas", foto: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/92/Logo-ALBIOMA.jpg/250px-Logo-ALBIOMA.jpg", url: "https://www.albioma.com/tr/" },
    { ad: "Vansan Pump", foto: "https://pomsad.org.tr/en/wp-content/uploads/2023/07/vansan-logo.jpg", url: "https://vansan.com.tr" },
    { ad: "ISM", foto: "https://www.mosb.org.tr/wp-content/uploads/2021/11/ism-makine-elektrik.jpg", url: "https://ismminibar.com" },
    { ad: "Ateş Çelik", foto: "https://media.licdn.com/dms/image/v2/D4D0BAQE5F3CmCf50GQ/company-logo_200_200/company-logo_200_200/0/1682609219555/ate_elik_welding_coating_logo?e=2147483647&v=beta&t=xsjXOlKcTr9GFysu9ZztYA5zEhjg9iCdn5Pu7cwqbbU", url: "https://ateswindpower.com" },
    { ad: "Havatek Makine", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtf02K5-rpFJVYKyTqEKfsY__o1yAcC122A&s", url: "http://www.havatek.com.tr" },
    { ad: "Enercon", foto: "https://www.windindustry-in-germany.com/i/e9d7/66b0962a61439f52e5044ad5/1/1200/333/phpEnlYZn_uid_66b0962a8d59a.png", url: "https://www.enercon.com.tr" },
    { ad: "Günak Makine", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZk6Bv1mKDS1AWSidtTvl08Dq-eh5yNjmjJw&s", url: "https://www.gunak.com" },
    { ad: "İzmir Demir Çelik", foto: "https://celik.org.tr/wp-content/uploads/2016/12/thumber-11.jpg", url: "https://www.izdemir.com.tr" },
    { ad: "Türkiye Petrolleri", foto: "https://play-lh.googleusercontent.com/50vdlu9WzHAj9tyoM9f7UXKdFGyzft-YLwpFtDN8v-Ki1tCrNY9jAm1wm42uQtXDAQ", url: "https://www.tppd.com.tr" },
    { ad: "Yatagan Termik Santrali", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSajdDTzoqvQQJw1QW4fg-vK8QQjswbm4Tw&s", url: "https://www.yatagantermik.com.tr" },
    { ad: "Zenit Madencilik", foto: "https://www.zenitmadencilik.com/img/brand/zenit-madencilik.jpg", url: "https://www.zenitmadencilik.com" },
    { ad: "Tüprag-Eldorado", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MJm7CvsXDJF-4cwT62lzIWET9L4wdkMt1g&s", url: "https://www.tuprag.com.tr" },
    { ad: "Atik Metal", foto: "https://img-kariyer.mncdn.com/mnpadding/1200/630/FFFFFF/UploadFiles/Clients/SquareLogo/558/ai_dtk_71558_6022024011022.png", url: "http://www.atikmetal.com.tr" },
    { ad: "KPS-Karadeniz Holding", foto: "https://mtagrup.com/upload/karadeniz-holding-logo.png", url: "https://www.karadenizholding.com" }
  ];

  return (
    <>
      <Header />

      <div className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white flex flex-col items-center">
 
        <h2 className="text-5xl font-extralight tracking-wider mb-16 text-center text-gray-800">
          REFERANSLARIMIZ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl">
          {sirketler.map((sirket) => (
            <a
              key={sirket.ad}
              href={sirket.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center w-[200px] mx-auto transform opacity-0 animate-fadeIn transition-transform hover:scale-105"
            >
              <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={sirket.foto}
                  alt={sirket.ad}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-center px-2">{sirket.ad}</span>
                </div>
              </div>
              <span className="mt-4 py-2 w-full bg-gray-200 rounded-xl text-center font-semibold text-black shadow-md hover:shadow-xl transition duration-300">
                {sirket.ad}
              </span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Referans;