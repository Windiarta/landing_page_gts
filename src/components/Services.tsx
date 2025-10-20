import { Card, SectionTitle } from "@/components/ui";

const services = [
  {
    key: "integrated",
    en: "Integrated Technology Solutions",
    id: "Solusi Teknologi Terpadu",
    descEn: "Business systems, device integration, and process automation.",
    descId: "Sistem manajemen bisnis, integrasi perangkat, dan otomasi proses.",
    icon: "🔗",
    color: "bg-blue-100 border-blue-300"
  },
  {
    key: "hardware",
    en: "Electronic Devices and Systems",
    id: "Perangkat dan Sistem Elektronik",
    descEn: "Efficient and reliable devices tailored to industries.",
    descId: "Perangkat efisien dan andal sesuai kebutuhan industri.",
    icon: "⚡",
    color: "bg-green-100 border-green-300"
  },
  {
    key: "software",
    en: "Software Development",
    id: "Pengembangan Perangkat Lunak",
    descEn: "Web, mobile, and custom systems to boost performance.",
    descId: "Aplikasi web, mobile, dan sistem kustom untuk kinerja lebih baik.",
    icon: "💻",
    color: "bg-purple-100 border-purple-300"
  },
  {
    key: "infra",
    en: "IT Infrastructure & Security",
    id: "Infrastruktur & Keamanan TI",
    descEn: "Network, server, cloud, and cybersecurity services.",
    descId: "Jaringan, server, cloud, dan keamanan siber.",
    icon: "🛡️",
    color: "bg-red-100 border-red-300"
  },
  {
    key: "consulting",
    en: "Consulting & Technical Support",
    id: "Konsultasi & Dukungan Teknis",
    descEn: "Digitalization support, training, and maintenance.",
    descId: "Pendampingan digitalisasi, pelatihan, dan pemeliharaan.",
    icon: "🎯",
    color: "bg-yellow-100 border-yellow-300"
  },
];

export function Services({ locale }: { locale: string }) {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Produk & Layanan" : "Products & Services"}
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "id" 
              ? "Solusi teknologi terintegrasi untuk mendukung efisiensi, keamanan, dan pertumbuhan bisnis mitra di berbagai sektor."
              : "Integrated technology solutions to support efficiency, security, and business growth across various sectors."
            }
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.key} className={`p-8 ${s.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{locale === "id" ? s.id : s.en}</h3>
                <p className="text-gray-700 leading-relaxed">{locale === "id" ? s.descId : s.descEn}</p>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    {locale === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
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