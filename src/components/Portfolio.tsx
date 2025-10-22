"use client"

import Image from "next/image";
import { SectionTitle } from "@/components/ui";
import { useState } from "react";

const items = [
  {
    k: "parking",
    en: "Parking System Integrator",
    id: "Mitra Penyedia Sistem Perparkiran",
    client: "Dishub Kota Pekanbaru",
    descEn: "Digital parking system integrated with local government management system, improving efficiency and transparency.",
    descId: "Sistem perparkiran digital terintegrasi dengan sistem manajemen pemerintah daerah, meningkatkan efisiensi dan transparansi.",
    icon: "🅿️",
    color: "bg-blue-50 border-blue-200"
  },
  {
    k: "banking",
    en: "Official Banking Payment Facilitator",
    id: "Fasilitator Resmi Pembayaran Bank",
    client: "Multiple Banks",
    descEn: "Secure, fast, and integrated payment systems with various national banks, supporting financial service digitalization.",
    descId: "Sistem pembayaran yang aman, cepat, dan terintegrasi dengan berbagai bank nasional, mendukung digitalisasi layanan keuangan.",
    icon: "🏦",
    color: "bg-green-50 border-green-200"
  },
  {
    k: "settlement",
    en: "Reconciliation & Settlement System",
    id: "Sistem Rekonsiliasi & Settlement",
    client: "Dishub Pekanbaru",
    descEn: "Digital transaction reconciliation and settlement system ensuring accuracy and financial data integrity.",
    descId: "Sistem rekonsiliasi dan settlement transaksi digital memastikan akurasi dan integritas data keuangan.",
    icon: "📊",
    color: "bg-purple-50 border-purple-200"
  },
  {
    k: "mini-atm",
    en: "Mini ATM Application",
    id: "Aplikasi Mini ATM",
    client: "KB Bank",
    descEn: "Mini ATM application development as part of banking system integration, improving financial service access.",
    descId: "Pengembangan aplikasi mini ATM sebagai bagian dari solusi integrasi sistem perbankan, membantu peningkatan akses layanan keuangan.",
    icon: "💳",
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    k: "sam-card",
    en: "Custom Hardware & Software",
    id: "Hardware & Software Kustom",
    client: "Various Clients",
    descEn: "SIM/SAM card reader development supporting data security and digital authentication in electronic transactions.",
    descId: "Pengembangan pembaca SIM/SAM card untuk mendukung keamanan data dan autentikasi digital dalam transaksi elektronik.",
    icon: "🔐",
    color: "bg-red-50 border-red-200"
  },
  { 
    k: "hid", 
    en: "Official HID Partner", 
    id: "Mitra Resmi HID",
    client: "HID Indonesia",
    descEn: "Smart card-based digital identification and security solutions with international standards.",
    descId: "Solusi identifikasi dan keamanan digital berbasis kartu pintar dengan standar internasional.",
    icon: "🆔",
    color: "bg-indigo-50 border-indigo-200"
  },
  { 
    k: "aisino", 
    en: "Aisino Payment Devices Distributor", 
    id: "Distributor Perangkat Pembayaran Aisino",
    client: "Aisino",
    descEn: "Official distributor of Aisino payment devices providing efficient digital transaction solutions.",
    descId: "Distributor resmi perangkat pembayaran Aisino menyediakan solusi transaksi digital yang efisien.",
    icon: "💰",
    color: "bg-emerald-50 border-emerald-200"
  },
  { 
    k: "supplies", 
    en: "Supporting Components", 
    id: "Komponen Pendukung",
    client: "Various Clients",
    descEn: "SIM cards, thermal paper, and adapters supporting electronic transaction systems.",
    descId: "SIM Card, thermal paper, dan adaptor berkualitas tinggi untuk menunjang sistem transaksi elektronik.",
    icon: "🔌",
    color: "bg-gray-50 border-gray-200"
  },
  {
    k: "dev-platform",
    en: "Integrated Digital Platform Partner",
    id: "Pengembang Platform Terintegrasi",
    client: "Various Partners",
    descEn: "End-to-end development of secure, scalable digital payment platforms.",
    descId: "Pengembangan platform pembayaran digital yang aman dan scalable end-to-end.",
    icon: "🧩",
    color: "bg-sky-50 border-sky-200"
  },
  {
    k: "global-partnerships",
    en: "Global Technology Partnerships",
    id: "Kemitraan Teknologi Global",
    client: "HP, Lenovo, Sangfor, Huawei, AWS",
    descEn: "Strengthening solutions with leading hardware, network security, and cloud providers.",
    descId: "Memperkuat solusi dengan penyedia hardware, keamanan jaringan, dan cloud terkemuka.",
    icon: "🌐",
    color: "bg-teal-50 border-teal-200"
  },
];

const details: Record<string, { longEn?: string; longId?: string; images?: string[] }> = {
  parking: {
    longEn:
      "PT Graha Trimitra Selaras (GTS) has successfully developed and implemented a cashless payment system using EDC (Electronic Data Capture) for parking services in the City of Pekanbaru. This solution enables users to pay faster, safer, and more conveniently through various electronic methods such as debit cards, e-money, and QRIS. With this system, user experience becomes far more efficient—no need to find cash or wait for change—while also supporting the cashless society movement and Smart City initiatives in Pekanbaru. For the Transportation Agency and local government, GTS provides greater transparency and accountability. All parking transactions are recorded in real time and can be monitored via a digital dashboard displaying revenue data, transaction locations, and field officer performance. As a result, parking management becomes more efficient, measurable, and controlled, while increasing local revenue potential from parking retribution.",
    longId:
      "PT Graha Trimitra Selaras (GTS) telah sukses mengembangkan dan menerapkan sistem pembayaran non-tunai berbasis EDC (Electronic Data Capture) pada layanan perparkiran di Kota Pekanbaru. Solusi ini memungkinkan pengguna jasa parkir untuk melakukan pembayaran dengan lebih cepat, aman, dan praktis, melalui berbagai metode transaksi elektronik seperti kartu debit, e-money, maupun QRIS. Dengan hadirnya sistem ini, pengalaman pengguna menjadi jauh lebih efisien karena tidak perlu lagi mencari uang tunai atau menunggu kembalian. Selain itu, sistem ini turut mendukung gerakan cashless society dan penerapan Smart City di Pekanbaru. Bagi pihak Dinas Perhubungan dan Pemerintah Daerah, solusi GTS memberikan transparansi dan akuntabilitas yang lebih tinggi. Seluruh transaksi parkir terekam secara real-time dan dapat dimonitor melalui dashboard digital yang menampilkan data pendapatan, lokasi transaksi, serta performa petugas lapangan. Dengan demikian, pengelolaan parkir menjadi lebih efisien, terukur, dan terkontrol, sekaligus meningkatkan potensi pendapatan daerah dari sektor retribusi parkir.",
    images: ["/1.png"],
  },
  banking: {
    longEn: "As a company committed to innovation in financial technology, PT Graha Trimitra Selaras (GTS) has become a trusted partner of various national banks in delivering integrated and secure cashless payment solutions. Built on proprietary technology, GTS solutions connect directly with major banks and support modern payment methods—from debit and credit cards, NFC (Near Field Communication), to QRIS, the national digital payment standard. Beyond providing technology, GTS acts as an integration bridge between banks and business partners, enabling cashless implementations to run quickly, efficiently, and seamlessly. With GTS, partners can connect their services to banking networks in a significantly shorter time-to-market, allowing products and services to launch faster. This advantage makes GTS not just a solution provider, but a strategic partner accelerating the growth of Indonesia’s digital payments ecosystem—delivering modern, inclusive, and high value-added services for partners and customers.",
    longId: "Sebagai perusahaan yang berkomitmen menghadirkan inovasi di dunia teknologi finansial, PT Graha Trimitra Selaras (GTS) telah menjadi mitra terpercaya berbagai bank nasional dalam penyediaan solusi pembayaran non-tunai yang terintegrasi dan aman. Melalui sistem teknologi yang dikembangkan secara mandiri, solusi GTS telah terhubung langsung dengan sejumlah bank besar, mendukung berbagai metode pembayaran modern — mulai dari transaksi kartu debit dan kredit, teknologi NFC (Near Field Communication), hingga QRIS yang kini menjadi standar pembayaran digital nasional. Lebih dari sekadar penyedia teknologi, GTS berperan sebagai jembatan integrasi antara bank dan mitra bisnis, memungkinkan proses implementasi transaksi non-tunai berjalan cepat, efisien, dan tanpa hambatan. Berkat dukungan sistem GTS, para mitra kini dapat menghubungkan layanan mereka ke jaringan perbankan dengan waktu implementasi yang jauh lebih singkat, sehingga produk dan layanan mereka dapat segera diluncurkan ke pasar. Keunggulan ini menjadikan GTS bukan hanya penyedia solusi, tetapi mitra strategis dalam mempercepat pertumbuhan ekosistem pembayaran digital di Indonesia — menghadirkan layanan yang lebih modern, inklusif, dan bernilai tambah tinggi bagi mitra dan pelanggan.",
    images: ["/2.png", "/3.png", "/4.png"],
  },
  settlement: {
    longEn: "Beyond innovative digital payment solutions, PT Graha Trimitra Selaras (GTS) is a trusted technical partner for reconciliation and settlement of various non-cash transactions between banks and business partners. Through an integrated online dashboard, GTS can monitor all ongoing transactions in real time, providing full visibility into data and financial flows. The system enables accurate and transparent automated reconciliation, ensuring consistency between banking data and partner systems. Supported by experienced professionals, GTS executes processes with high operational standards and strict quality control, guaranteeing accuracy. GTS also performs settlement quickly and efficiently, ensuring that transaction proceeds are remitted to partners on time—maintaining healthy cash flow and business continuity, and strengthening trust in every collaboration.",
    longId: "Selain menghadirkan solusi pembayaran digital yang inovatif, PT Graha Trimitra Selaras (GTS) juga berperan sebagai mitra teknis terpercaya dalam proses rekonsiliasi dan settlement berbagai transaksi non-tunai antara perbankan dan mitra bisnisnya. Melalui dashboard terintegrasi berbasis online, GTS mampu memantau seluruh transaksi yang berjalan secara real-time, memberikan visibilitas penuh terhadap arus data dan keuangan. Sistem ini memungkinkan GTS untuk melakukan rekonsiliasi otomatis yang akurat dan transparan, memastikan kesesuaian antara data perbankan dan sistem mitra secara menyeluruh. Didukung oleh tenaga kerja profesional yang ahli di bidangnya, GTS menjalankan setiap proses dengan standar operasional tinggi dan kontrol kualitas ketat, sehingga hasil rekonsiliasi dan settlement dapat terjamin keakuratannya. Lebih dari itu, GTS juga melakukan proses settlement secara cepat dan efisien, memastikan dana hasil transaksi diteruskan ke mitra tepat waktu. Hal ini menjaga kelancaran arus kas dan kesinambungan bisnis para mitra GTS, memperkuat kepercayaan dalam setiap kolaborasi. Dengan kombinasi kecepatan, ketepatan, profesionalisme, dan keandalan sistem, GTS tidak hanya menyediakan solusi teknologi, tetapi juga menjadi tulang punggung keuangan digital yang mendukung ekosistem pembayaran nasional untuk tumbuh lebih transparan, modern, dan berkelanjutan.",
    images: ["/5.png"],
  },
  "mini-atm": {
    longEn: "As part of its commitment to financial inclusion, PT Graha Trimitra Selaras (GTS) has been entrusted as an aggregator partner of KB Bank to provide a Mini ATM platform—an innovation designed to deliver banking services that are closer, more efficient, and more affordable for communities. The GTS Mini ATM brings the core functions of a traditional ATM in a more compact, economical, and easy-to-deploy form, reaching areas not served by conventional ATMs. With this solution, people in remote regions can easily perform cash withdrawals, transfers, and balance inquiries near where they live. The solution also opens new business opportunities, allowing partners to act as Mini ATM agents and earn directly from each transaction, while banks benefit from significant operational efficiency. Through this strategic collaboration, GTS and KB Bank help drive local economies, expand access to financial services, and support the digital transformation of Indonesia’s banking sector.",
    longId: "Sebagai bagian dari komitmennya dalam mendukung inklusi keuangan nasional, PT Graha Trimitra Selaras (GTS) telah dipercaya menjadi mitra agregator KB Bank dalam penyediaan platform Mini ATM — sebuah inovasi yang dirancang untuk menghadirkan layanan perbankan yang lebih dekat, efisien, dan terjangkau bagi masyarakat. Platform Mini ATM besutan GTS menghadirkan fungsi utama mesin ATM dalam bentuk yang lebih ringkas, ekonomis, dan mudah diimplementasikan, sehingga dapat menjangkau wilayah-wilayah yang belum terlayani oleh mesin ATM konvensional. Dengan solusi ini, masyarakat di daerah terpencil kini dapat melakukan transaksi keuangan seperti tarik tunai, transfer, dan cek saldo dengan mudah di sekitar lingkungan mereka. Inovasi ini juga menciptakan ekosistem bisnis baru bagi para mitra, di mana mereka dapat berperan sebagai agen Mini ATM sekaligus memperoleh keuntungan langsung dari setiap transaksi yang dilakukan. Di sisi lain, pihak bank mendapatkan efisiensi operasional yang signifikan, karena tidak perlu lagi mengelola dan memelihara mesin ATM fisik yang biayanya tinggi. Melalui kolaborasi strategis ini, GTS, bersama KB Bank, berkontribusi nyata dalam menggerakkan roda ekonomi masyarakat, memperluas akses terhadap layanan keuangan, dan mendukung transformasi digital perbankan Indonesia. Dengan keahlian teknis, sistem yang andal, dan tenaga profesional berpengalaman, GTS terus berinovasi untuk menghadirkan solusi finansial yang inklusif, tangguh, dan memberikan manfaat berkelanjutan bagi masyarakat luas.",
    images: ["/6.png"],
  },
  "sam-card": {
    longEn: "Focused on technological innovation and efficiency, PT Graha Trimitra Selaras (GTS) delivers custom hardware solutions tailored to technical needs in electronic payment and telecommunications sectors. A flagship solution is the SIM Card and SAM Card reader used for registration, verification, and management of cards from both operators and merchants. The system enables automated, fast, and accurate SIM/SAM inventory, making data management far more efficient. This solution has proven valuable to many partners, including Indonesia’s leading EDC operator, MTI, which entrusted GTS to develop and manage their SIM and SAM management system. With GTS, MTI can now monitor stock, status, and distribution in real time while minimizing loss and data errors. With strong hardware engineering capabilities, GTS provides flexible solutions that can be tailored to each partner’s needs—becoming a strategic partner for efficient, reliable, and high-value operations across the digital industry.",
    longId: "Sebagai perusahaan yang berfokus pada inovasi dan efisiensi teknologi, PT Graha Trimitra Selaras (GTS) juga menyediakan solusi custom hardware yang dirancang khusus untuk mendukung kebutuhan teknis para mitra di sektor pembayaran elektronik dan telekomunikasi. Salah satu solusi unggulan GTS adalah perangkat pembaca SIM Card dan SAM Card, yang digunakan untuk pendataan, verifikasi, dan manajemen kartu baik yang berasal dari operator maupun dari merchant. Sistem ini memungkinkan proses inventori SIM Card dan SAM Card dilakukan secara otomatis, cepat, dan akurat — menjadikan pengelolaan data jauh lebih efisien. Solusi ini telah terbukti membantu banyak mitra bisnis, termasuk operator EDC terbesar di Indonesia, MTI, yang mempercayakan GTS untuk mengembangkan dan mengelola sistem pengelolaan SIM Card serta SAM Card mereka. Dengan implementasi sistem GTS, MTI kini dapat memantau stok, status, dan distribusi kartu secara real-time, sekaligus meminimalkan risiko kehilangan dan kesalahan data. Dengan kemampuan rekayasa perangkat keras yang kuat, GTS menghadirkan solusi yang fleksibel dan dapat disesuaikan dengan kebutuhan spesifik setiap mitra. Hal ini menjadikan GTS bukan sekadar penyedia teknologi, tetapi mitra strategis dalam menciptakan sistem operasional yang efisien, handal, dan bernilai tinggi bagi industri digital nasional.",
    images: ["/7.png"],
  },
  hid: {
    longEn: "To strengthen its portfolio in technology and digital security, PT Graha Trimitra Selaras (GTS) has formed a strategic partnership with HID, a global leader in identification and electronic authentication. Through this collaboration, GTS delivers a range of HID-based solutions, including smart card readers, fingerprint verification, and other digital identity technologies. These solutions address data security, access control, and identity authentication needs across sectors—from finance and government to private enterprises. Backed by HID’s world-class technology and GTS’s professional technical expertise, every implementation meets high security standards, offers seamless integration, and includes reliable after-sales support. This partnership underscores GTS’s commitment to providing innovative, secure, and trusted technology solutions while reinforcing its position as a leading system integrator and identity technology provider in Indonesia.",
    longId: "Dalam upayanya memperkuat portofolio solusi teknologi dan keamanan digital, PT Graha Trimitra Selaras (GTS) telah menjalin kemitraan strategis dengan HID, perusahaan global terkemuka dalam bidang identifikasi dan autentikasi elektronik. Melalui kerja sama ini, GTS menghadirkan beragam solusi berbasis perangkat HID, mencakup sistem pembacaan smartcard, verifikasi sidik jari (fingerprint), serta teknologi identifikasi digital lainnya. Solusi-solusi ini dirancang untuk menjawab kebutuhan keamanan data, kontrol akses, dan autentikasi identitas di berbagai sektor — mulai dari keuangan, pemerintahan, hingga korporasi swasta. Dengan dukungan teknologi kelas dunia dari HID dan keahlian teknis tim GTS yang profesional, setiap implementasi dilakukan dengan standar keamanan tinggi, integrasi yang mulus, dan dukungan layanan purna jual yang andal. Kemitraan ini menjadi bukti nyata komitmen GTS dalam menyediakan solusi teknologi yang inovatif, aman, dan terpercaya, sekaligus memperkuat posisinya sebagai system integrator dan penyedia solusi teknologi identifikasi terdepan di Indonesia.",
    images: ["/8.png"],
  },
  aisino: {
    longEn: "As an innovator in integrated digital payment solutions, PT Graha Trimitra Selaras (GTS) is an official technology partner for Aisino and Sunmi payment devices. Through these partnerships, GTS provides modern EDC solutions that support various non-cash payment methods—from debit and credit cards to QRIS and e-wallets. Devices integrated by GTS connect directly with banking systems, enabling fast, secure, and stable transactions, and are widely used across sectors to drive adoption of efficient, transparent digital payments. All devices managed by GTS are connected to a Terminal Management System (TMS) in real time, enabling comprehensive monitoring of device status, location, and operational performance. GTS also provides interactive dashboards displaying live transaction and system performance data, simplifying monitoring and business analysis for partners. With advanced technology, integrated systems, and professional expertise, GTS ensures every solution runs optimally—benefiting the public, banks, and businesses alike.",
    longId: "Sebagai perusahaan yang terus berinovasi dalam menghadirkan solusi pembayaran digital terintegrasi, PT Graha Trimitra Selaras (GTS) telah menjadi mitra resmi perangkat pembayaran Aisino dan Sunmi. Melalui kemitraan ini, GTS menghadirkan solusi EDC (Electronic Data Capture) modern yang mendukung berbagai metode pembayaran non-tunai — mulai dari kartu debit dan kredit, QRIS, hingga dompet digital. Perangkat Aisino dan Sunmi yang diintegrasikan oleh GTS telah terhubung langsung dengan sistem perbankan, memungkinkan proses transaksi berjalan dengan cepat, aman, dan stabil. Solusi ini kini telah digunakan secara luas untuk mendukung transaksi non-tunai di berbagai sektor, membantu masyarakat beralih ke sistem pembayaran digital yang lebih efisien dan transparan. Seluruh perangkat yang dikelola GTS juga terhubung dengan TMS (Terminal Management System) secara real-time, memungkinkan pemantauan status perangkat, lokasi, serta kinerja operasional secara menyeluruh. Selain itu, GTS menyediakan dashboard interaktif yang menampilkan data transaksi dan performa sistem secara langsung, memberikan kemudahan bagi mitra dalam melakukan monitoring dan analisis bisnis. Dengan dukungan teknologi terkini, sistem yang terintegrasi, dan tenaga ahli profesional, GTS memastikan setiap solusi pembayaran yang dihadirkan berjalan optimal — tidak hanya mempermudah masyarakat, tetapi juga meningkatkan efisiensi dan keandalan bagi mitra perbankan serta pelaku usaha.",
    images: ["/9.png", "10.png"],
  },
  supplies: {
    longEn: "To support an efficient and sustainable digital payments ecosystem, PT Graha Trimitra Selaras (GTS) not only provides systems and devices, but also comprehensive non-cash transaction supplies. GTS provides SIM cards and data plans to ensure stable connectivity for EDC devices and digital systems. GTS also supplies critical operational components such as thermal paper, adapters, and other accessories to ensure smooth field operations. In addition, GTS offers managed services covering device maintenance, system monitoring, and ongoing technical support—allowing partners to operate without disruption while professionals handle all technical aspects. With this end-to-end approach, GTS ensures partners receive integrated, efficient, and ready-to-use services—making GTS a trusted technology partner for the growth of Indonesia’s cashless ecosystem.",
    longId: "Untuk mendukung ekosistem pembayaran digital yang efisien dan berkelanjutan, PT Graha Trimitra Selaras (GTS) tidak hanya menghadirkan solusi sistem dan perangkat pembayaran, tetapi juga menyediakan berbagai kebutuhan pendukung transaksi non-tunai secara menyeluruh. GTS menyediakan SIM Card dan paket data (data plan) untuk memastikan setiap perangkat EDC dan sistem digital tetap terkoneksi dengan stabil. Selain itu, GTS juga menyediakan berbagai komponen operasional penting seperti kertas thermal, adaptor, dan aksesori pendukung lainnya, guna menjamin kelancaran proses transaksi di lapangan. Tak hanya itu, GTS juga menawarkan layanan manajemen servis (managed service) yang mencakup pemeliharaan perangkat, pemantauan sistem, serta dukungan teknis secara berkelanjutan. Dengan layanan ini, mitra bisnis dapat beroperasi tanpa gangguan, karena seluruh aspek teknis dikelola secara profesional oleh tim ahli GTS. Dengan pendekatan end-to-end solution, GTS memastikan setiap mitra mendapatkan layanan yang terpadu, efisien, dan siap pakai, menjadikan GTS sebagai mitra teknologi terpercaya dalam mendukung pertumbuhan ekosistem pembayaran non-tunai di Indonesia.",
    images: ["/11.png", "/12.png"],
  },
  "dev-platform": {
    longEn: "As an experienced technology company, PT Graha Trimitra Selaras (GTS) is not only a provider of payment systems and devices, but also a development partner delivering integrated digital platforms that advance partner businesses. With professional developers experienced in software engineering, systems integration, and digital security, GTS builds solutions that are reliable, secure, and scalable—especially for digital payments and non-cash transaction management. GTS platforms enable end-to-end integration between partner systems and banking infrastructure or digital payment services, creating efficient, transparent, and easy-to-operate transaction flows. With a collaborative, results-driven approach, GTS accelerates digital transformation and delivers technology that is both sophisticated and strategically valuable—improving competitiveness and expanding reach in the digital economy.",
    longId: "Sebagai perusahaan teknologi yang berpengalaman, PT Graha Trimitra Selaras (GTS) tidak hanya berperan sebagai penyedia solusi perangkat dan sistem pembayaran, tetapi juga sebagai mitra pengembang (developer partner) yang menghadirkan platform digital terintegrasi untuk mendukung kemajuan bisnis para mitra. Dengan tim developer profesional yang berpengalaman di bidang rekayasa perangkat lunak, integrasi sistem, dan keamanan digital, GTS mampu membangun solusi yang handal, aman, dan scalable — khususnya dalam bidang pembayaran digital dan manajemen transaksi non-tunai. Platform yang dikembangkan GTS memungkinkan integrasi menyeluruh antara sistem internal mitra dengan infrastruktur perbankan dan layanan pembayaran digital, sehingga menciptakan alur transaksi yang efisien, transparan, dan mudah dioperasikan. Melalui pendekatan kolaboratif dan berorientasi hasil, GTS membantu mitra bisnis mempercepat transformasi digital mereka, menghadirkan teknologi yang tidak hanya canggih, tetapi juga bernilai strategis dalam meningkatkan daya saing dan memperluas jangkauan bisnis di era ekonomi digital.",
    images: ["/13.png"],
  },
  "global-partnerships": {
    longEn: "To deliver reliable, efficient, and competitive technology solutions, PT Graha Trimitra Selaras (GTS) builds strategic partnerships with global technology leaders. GTS collaborates with HP, Lenovo, Sangfor, Huawei, and Amazon Web Services (AWS) to strengthen the infrastructure behind every solution—covering servers, laptops, network security systems, and cloud infrastructure that power GTS’s digital platforms. With Huawei and AWS Cloud, GTS delivers scalable, secure, and flexible cloud-based solutions while ensuring high performance. Hardware from HP, Lenovo, and Sangfor ensures stability and reliability at the infrastructure layer. The synergy of global technology and GTS’s local innovation creates a solid solution ecosystem—supporting partner digital transformation with top performance, guaranteed security, and sustainable efficiency.",
    longId: "Dalam menghadirkan solusi teknologi yang handal, efisien, dan berdaya saing tinggi, PT Graha Trimitra Selaras (GTS) membangun jaringan kemitraan strategis dengan berbagai pemimpin industri teknologi global. GTS telah bekerja sama dengan HP, Lenovo, Sangfor, Huawei, dan Amazon Web Services (AWS) untuk memperkuat infrastruktur dari setiap solusi yang dikembangkan. Kolaborasi ini mencakup penyediaan server, laptop, sistem keamanan jaringan, hingga infrastruktur cloud yang menjadi tulang punggung operasional berbagai platform digital GTS. Dengan dukungan teknologi dari Huawei dan AWS Cloud, GTS mampu menghadirkan solusi berbasis cloud yang scalable, aman, dan fleksibel, sekaligus memastikan performa tinggi bagi mitra bisnisnya. Sementara dukungan perangkat keras dari HP, Lenovo, dan Sangfor menjamin kestabilan dan keandalan sistem di tingkat infrastruktur. Sinergi antara teknologi global dan inovasi lokal GTS menciptakan ekosistem solusi yang solid — mendukung transformasi digital para mitra bisnis dengan performa terbaik, keamanan terjamin, dan efisiensi berkelanjutan.",
    images: ["/14.png", "/15.png", "/16.png", "/17.png", "/18.png"],
  },
};

export function Portfolio({ locale }: { locale: string }) {
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});

  const nextImage = (key: string) => {
    const imgs = details[key]?.images ?? [];
    if (imgs.length === 0) return;
    setImageIndexes((prev) => ({ ...prev, [key]: ((prev[key] ?? 0) + 1) % imgs.length }));
  };

  const prevImage = (key: string) => {
    const imgs = details[key]?.images ?? [];
    if (imgs.length === 0) return;
    setImageIndexes((prev) => ({ ...prev, [key]: ((prev[key] ?? 0) - 1 + imgs.length) % imgs.length }));
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Portofolio Proyek" : "Project Portfolio"}
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "id" 
              ? "Beberapa proyek unggulan yang telah kami selesaikan bersama mitra dan klien terpercaya."
              : "Some of our flagship projects completed with trusted partners and clients."
            }
          </p>
        </div>
        <div className="space-y-16">
          {items.map((i, idx) => {
            const det = details[i.k] ?? {};
            const imgs = det.images ?? [];
            const currentIndex = imageIndexes[i.k] ?? 0;
            const img = imgs.length > 0 ? imgs[currentIndex] : null;
            const isReversed = idx % 2 === 1;
            return (
              <div key={i.k} className={`rounded-2xl border ${i.color} p-0 overflow-hidden`}> 
                <div className={`flex flex-col ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"} items-center sm:items-center`}>
                  <div className="relative sm:w-1/2 w-full">
                    {img ? (
                      <div className="relative w-full h-72 sm:h-[26rem]">
                        <Image src={img} alt={locale === "id" ? i.id : i.en} fill className="object-contain" />
                        {imgs.length > 1 && (
                          <>
                            <button
                              aria-label="Previous image"
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
                              onClick={() => prevImage(i.k)}
                            >
                              ‹
                            </button>
                            <button
                              aria-label="Next image"
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
                              onClick={() => nextImage(i.k)}
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-72 sm:h-[26rem] flex items-center justify-center text-gray-400">No Image</div>
                    )}
                  </div>
                  <div className="sm:w-1/2 w-full p-6 sm:p-10">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="text-3xl mb-2">{i.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{locale === "id" ? i.id : i.en}</h3>
                        <p className="text-sm font-medium text-primaryBlue mt-1">{i.client}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                      {locale === "id" ? (det.longId ?? i.descId) : (det.longEn ?? i.descEn)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}