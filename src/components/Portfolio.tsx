import { Card, SectionTitle } from "@/components/ui";

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
    client: "Bank Bukopin",
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
];

export function Portfolio({ locale }: { locale: string }) {
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Card key={i.k} className={`p-8 ${i.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{i.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{locale === "id" ? i.id : i.en}</h3>
                <p className="text-sm font-medium text-primaryBlue mb-3">{i.client}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{locale === "id" ? i.descId : i.descEn}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                    {locale === "id" ? "Proyek Selesai" : "Completed Project"}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}