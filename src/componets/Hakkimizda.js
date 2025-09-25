


import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Hakkimizda = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center gap-8 p-6">
        <div className="w-full max-w-4xl flex flex-col gap-4 bg-white border border-gray-300 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-center text-black">HAKKIMIZDA</h2>
          <p className="text-center text-gray-700">
            DENA TEKNİK’in temelleri, 2001 yılında İstanbul Boğazı’nın kıyısında, köklü bir eğitim kurumunun bahçesinde atıldı. Altı yıl boyunca okyanuslarda seyreden gemilerin makine dairelerinde edinilen deneyimler, bizlere güçlü bir teknik altyapı ve disiplin kazandırdı.
          </p>
          <p className="text-center text-gray-700">
            2011 yılından itibaren ise uluslararası markaların bünyesinde aktif ve yoğun bir şekilde çalışarak sektörel bilgi birikimimizi ve uzmanlığımızı sürekli geliştirdik.
          </p>
          <p className="text-center text-gray-700">
            Bugün DENA TEKNİK olarak; alanımızda edindiğimiz teorik ve pratik bilgileri, yılların getirdiği tecrübe ve donanımlarla harmanlayarak siz değerli müşterilerimize güvenilir, profesyonel ve sürdürülebilir çözümler sunmaya devam ediyoruz.
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-4 bg-white border border-gray-300 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-center text-black">ÇÖZÜM ORTAĞINIZ</h2>
          <div className="flex flex-col gap-2 text-left w-full text-gray-700">
            <p>▪ DENA TEKNİK sizlere her zaman teknik, bilime dayalı hizmet ve anlaşılabilir bir dil sunmaktadır.</p>
            <p>▪ DENA TEKNİK geleneksel bir satış & servis firması değildir; sizlerin ihtiyacına göre potansiyel üreten bir firmadır.</p>
            <p>▪ DENA TEKNİK ihtiyaçlarınızı uluslararası seviyede inceleyen ve çözüm üreten bir firmadır.</p>
            <p>▪ Tüm talepleriniz bir proje olarak algılanır ve sürdürülür.</p>
          </div>
        </div>

     <div className="w-full max-w-4xl text-center mt-4">
  <a
    href="/pdfs/kvkk.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-black underline decoration-black hover:text-black"
  >
    Kişisel verilerinizin korunması hakkında aydınlatma metnine ulaşmak için tıklayınız.
  </a>
</div>

      </main>
      <Footer />
    </div>
  );
};

export default Hakkimizda;

