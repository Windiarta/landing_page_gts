import { Card, SectionTitle } from "@/components/ui";

const items = [
  { 
    k: "experience", 
    en: "Experience & Credibility", 
    id: "Pengalaman & Kredibilitas",
    descEn: "Founded in 2008, GTS has extensive experience in technology development and proven electronic solutions.",
    descId: "Didirikan sejak 2008, GTS memiliki pengalaman luas dalam pengembangan teknologi dan solusi elektronik yang telah terbukti.",
    icon: "🏆",
    color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  },
  { 
    k: "integrated", 
    en: "Integrated & Innovative Solutions", 
    id: "Solusi Terpadu & Inovatif",
    descEn: "End-to-end solutions from device development to digital systems with innovative and efficient approaches.",
    descId: "Solusi end-to-end mulai dari pengembangan perangkat hingga sistem digital dengan pendekatan inovatif dan efisien.",
    icon: "🔧",
    color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
  },
  { 
    k: "quality", 
    en: "Commitment to Quality & Professionalism", 
    id: "Komitmen pada Kualitas & Profesionalisme",
    descEn: "Every service is delivered with high standards through transparent processes and experienced professional teams.",
    descId: "Setiap layanan dikerjakan dengan standar tinggi melalui proses yang transparan dan tim profesional berpengalaman.",
    icon: "⭐",
    color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
  },
  { 
    k: "tech", 
    en: "Latest and Adaptive Technologies", 
    id: "Teknologi Terkini & Adaptif",
    descEn: "GTS always follows the latest technology developments to ensure solutions remain relevant and competitive.",
    descId: "GTS selalu mengikuti perkembangan teknologi terbaru untuk memastikan setiap solusi tetap relevan dan berdaya saing.",
    icon: "🚀",
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200"
  },
  { 
    k: "partnership", 
    en: "Long-term Partnerships", 
    id: "Kemitraan Jangka Panjang",
    descEn: "We are not just service providers, but strategic partners committed to supporting long-term client growth.",
    descId: "Kami tidak sekadar menjadi penyedia layanan, tetapi mitra strategis yang berkomitmen mendukung pertumbuhan jangka panjang klien.",
    icon: "🤝",
    color: "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
  },
  { 
    k: "support", 
    en: "Reliable Technical Support", 
    id: "Dukungan Teknis yang Handal",
    descEn: "GTS provides after-sales service and ongoing technical support to ensure optimal system performance.",
    descId: "GTS memberikan layanan purna jual dan dukungan teknis berkelanjutan untuk memastikan sistem selalu berfungsi optimal.",
    icon: "🛠️",
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
  },
];

export function Advantages({ locale }: { locale: string }) {
  return (
    <section id="advantages" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Keunggulan Kompetitif" : "Competitive Advantages"}
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "id" 
              ? "Mengapa memilih GTS sebagai mitra teknologi Anda? Temukan keunggulan yang membedakan kami."
              : "Why choose GTS as your technology partner? Discover the advantages that set us apart."
            }
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Card key={i.k} className={`p-8 ${i.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{i.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{locale === "id" ? i.id : i.en}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{locale === "id" ? i.descId : i.descEn}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}