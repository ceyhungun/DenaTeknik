import React from "react";
import NewNavBar from "./NewNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Segmentler = () => {
  return (
    <>
      <NewNavBar />

<section className="py-32 px-6 font-['Roboto']">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500 mx-6">
    
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-black tracking-wide">HİZMETLERİMİZ</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      
<a href="/pdfs/Kestirimci.pdf" target="_blank" className="flex bg-gray-100 rounded-lg shadow-lg border-t-4 border-gray-400 hover:shadow-2xl transition-shadow duration-300 cursor-pointer" style={{ minHeight: '160px' }}>
  <div className="p-5 flex flex-col justify-center items-center flex-grow text-center">
    <h3 className="text-xl font-semibold text-black mb-2">KESTİRİMCİ BAKIM</h3>
    <p className="text-gray-700 text-base">
      ▪ Vibrasyon sensörleri ile makinelerin canlı durum takibi, iş emri ve alarm oluşturma, ileri seviye FFT analizi ve raporlama.</p>
    <p className="text-gray-700 text-base">
      ▪ Debi ölçer ile canlı izleme, hattaki akış miktarını ölçme, kaçak tespiti ve alarm oluşturma</p>
  </div>
</a>

        <a href="/pdfs/kaplin.pdf" target="_blank" className="flex bg-gray-100 rounded-lg shadow-lg border-t-4 border-gray-400 hover:shadow-2xl transition-shadow duration-300 cursor-pointer" style={{ minHeight: '160px' }}>
  <div className="p-5 flex flex-col justify-center items-center flex-grow text-center">
    <h3 className="text-xl font-semibold text-black mb-2">KAPLİN AYARI VE ŞASE DÜZELTME</h3>
    <p className="text-gray-700 text-base"> ▪ ISO 14691 ve ANSI/ASA S2.75-2017 standartlarına uyarak, lazerli ölçüm cihazları ile şase düzeltme ve mikron hassasiyetinde kaplin ayarlama</p>
  </div>
</a>

            <a href="/pdfs/.pdf" target="_blank" className="flex bg-gray-100 rounded-lg shadow-lg border-t-4 border-gray-400 hover:shadow-2xl transition-shadow duration-300 cursor-pointer" style={{ minHeight: '160px' }}>
  <div className="p-5 flex flex-col justify-center items-center flex-grow text-center">
    <h3 className="text-xl font-semibold text-black mb-2">ÇOK YAKINDA SİZLERLE</h3>
    <p className="text-gray-700 text-base">  </p>
  </div>
</a>


            <a href="/pdfs/.pdf" target="_blank" className="flex bg-gray-100 rounded-lg shadow-lg border-t-4 border-gray-400 hover:shadow-2xl transition-shadow duration-300 cursor-pointer" style={{ minHeight: '160px' }}>
  <div className="p-5 flex flex-col justify-center items-center flex-grow text-center">
    <h3 className="text-xl font-semibold text-black mb-2">ÇOK YAKINDA SİZLERLE</h3>
    <p className="text-gray-700 text-base"> </p>
  </div>
</a>

         
         
    </div>
  </div>
</section>


<section id="deniz" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">DENİZCİLİK</h2>
    </div>

    
    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Denizcilik sektöründe 20 yılı aşkın tecrübemizle, gemi makineleri ve deniz ekipmanlarının bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Müşterilerimizin operasyonel verimliliğini artıracak yenilikçi çözümler geliştiriyor, güvenli ve sürdürülebilir denizcilik hizmetleri sağlıyoruz.
      </p>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile gemi operasyonlarının sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Gemi Makine Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Büyük ölçekli gemi makinelerinde kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Makinelerin performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hale getirme.
        </p>
      </div>
    </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  
  <a href="/pdfs/dp1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/dp2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/dp3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

</div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          İlgili ekipman ve yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
          
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Operasyonlar sırasında karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>

        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>






    <section id="maden" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">MADENCİLİK</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Madencilik sektöründe edindiğimiz uzun yıllara dayanan deneyimle, madenlerde bulunan makineleri, ekipmanları ve tesislerinin bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor ve güvenli, sürdürülebilir üretim süreçlerini destekliyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Maden tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile üretim süreçlerinin sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Makine Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Madenlerde bulunan motor, değirmen, blower, kırıcılara kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Makinelerin ve ekipmanların performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hale getirme.Tesise özel projelendirme ile otomasyon sistemlerin kurulumu.
        </p>
      </div>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/maden1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/maden2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/maden3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          İlgili maden ekipmanları ve yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
         Operasyonlar sırasında karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      

      <section id="kimya" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">KİMYA</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Kimya sektöründe edindiğimiz uzun yıllara dayanan deneyimle, üretim tesislerinin bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor, güvenli ve sürdürülebilir üretim süreçlerini destekliyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Üretim tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile üretim süreçlerinin sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Ekipman Revizyonu</h3>
        <p className="text-center text-black mt-2">
         Reaktörler, mikserler, evaporatörler, kondenserlerin kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Ekipman ve proseslerin performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hâle getirme.
        </p>
      </div>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/kimya1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/kimya2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/kimya3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
        Kimya sektörüne yönelik üretim ekipmanlarının, yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Üretim tesislerinde karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <section id="enerji" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">ENERJİ</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Enerji sektöründe edindiğimiz deneyimle, santral ekipmanları ve tesislerin bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor, güvenli ve sürdürülebilir enerji üretimi için destek sağlıyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Enerji üretim tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile üretim süreçlerinin sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Ekipman Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Büyük ölçekli enerji santrali ekipmanlarında kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Santral ekipmanlarının performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hâle getirme.
        </p>
      </div>
    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/enerji1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/enerji2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/enerji3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          Santral ekipmanları, yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Enerji tesislerinde karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 <section id="petrol" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">PETROL & GAZ</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Petrol ve gaz sektöründe edindiğimiz uzun yıllara dayanan deneyimle, rafineri ve sondaj ekipmanlarının bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor ve güvenli, sürdürülebilir enerji üretim süreçlerini destekliyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Rafineri ve sondaj tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile üretim süreçlerinin sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Ekipman Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Büyük ölçekli petrol ve gaz tesis ekipmanlarında kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Ekipman ve proseslerin performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hâle getirme.
        </p>
      </div>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/petrol1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/petrol2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/petrol3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          Rafineri ve sondaj ekipmanları ile petrol & gaz sektörüne yönelik yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Operasyonlar sırasında karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     <section id="otomotiv" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">OTOMOTİV</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Otomotiv sektöründe edindiğimiz deneyimle, üretim tesisleri ve test ekipmanlarının bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor ve güvenli, sürdürülebilir üretim süreçlerini destekliyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Üretim ve test tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile üretim süreçlerinin sürekli izlenmesi ve yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Ekipman Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Büyük ölçekli otomotiv üretim ve test ekipmanlarında kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Üretim ve test süreçlerindeki ekipmanların performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hâle getirme.
        </p>
      </div>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/otomotiv1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/otomotiv2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/otomotiv3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          Otomotiv üretim ve test ekipmanları ile yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Tesislerinizde karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     <section id="demircelik" className="py-32 px-6">
  <div className="bg-gray-200 p-8 rounded-lg shadow-xl border-2 border-gray-500">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black">DEMİR ÇELİK</h2>
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-black">
        Demir çelik sektöründe edindiğimiz deneyimle, üretim tesisleri ve haddehaneler için bakım, revizyon ve satış süreçlerinde mühendislik çözümleri sunuyoruz. Operasyonel verimliliği artıracak yenilikçi çözümler geliştiriyor ve güvenli, sürdürülebilir üretim süreçlerini destekliyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white text-2xl font-bold rounded-full">
          🔧
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Acil Servis ve Bakım</h3>
        <p className="text-center text-black mt-2">
          Üretim ve haddehane tesislerinde operasyon sırasında ortaya çıkan acil arıza ve bakım ihtiyaçlarının hızlı tespiti ve müdahalesi ile süreçlerin kesintisiz yönetimi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full">
          ⚙️
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Ekipman Revizyonu</h3>
        <p className="text-center text-black mt-2">
          Büyük ölçekli demir çelik üretim ekipmanlarında, fırın ve işleme tesislerinde kapsamlı bakım ve revizyon çalışmaları, performans optimizasyonu ve enerji verimliliği odaklı uygulamalar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-400 text-white text-2xl font-bold rounded-full">
          📡
        </div>
        <h3 className="font-semibold text-xl text-black text-center">Uzaktan İzleme Sistemleri</h3>
        <p className="text-center text-black mt-2">
          Üretim süreçleri ve ekipmanların performansını uzaktan izlemeye yönelik dijital çözümler geliştirme ve bakım süreçlerini proaktif hâle getirme.
        </p>
      </div>
    </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
  <a href="/pdfs/demircelik1.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje1</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/demircelik2.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img 
        src="/projelogo.png" 
        alt="Proje Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg text-black text-center">Proje2</h3>
    <p className="text-center text-black mt-2"></p>
  </a>

  <a href="/pdfs/demircelik3.pdf" target="_blank" className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
      <img src="/projelogo.png" alt="Proje Logo" className="w-full h-full object-cover"/></div>
    <h3 className="font-semibold text-lg text-black text-center">Proje3</h3>
    <p className="text-center text-black mt-2"></p>
  </a>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">SATIŞ</h3>
        <p className="text-center text-black">
          Demir çelik sektörüne yönelik ekipmanların, yedek parçalarının satış ve imalatı.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-semibold text-lg text-black text-center">TEKNİK DESTEK</h3>
        <p className="text-center text-black">
          Demir çelik tesislerinde karşılaşabileceğiniz teknik sorunlar için 7/24 destek ve bakım hizmeti sunuyoruz.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 15 40</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-black">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>+0(232) 332 10 93</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
     </>
  );
};

export default Segmentler;

{/* <ButonSeg /> */}



