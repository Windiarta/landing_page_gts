import { Card, SectionTitle } from "@/components/ui";

const values = [
  { 
    k: "Integrity", 
    id: "Integritas", 
    en: "Uphold honesty, responsibility, and ethics.", 
    idd: "Menjunjung kejujuran, tanggung jawab, dan etika.",
    icon: "🛡️",
    color: "bg-blue-50 border-blue-200"
  },
  { 
    k: "Innovation", 
    id: "Inovasi", 
    en: "Encourage creative and adaptive thinking.", 
    idd: "Mendorong pemikiran kreatif dan adaptif.",
    icon: "💡",
    color: "bg-yellow-50 border-yellow-200"
  },
  { 
    k: "Excellence", 
    id: "Keunggulan", 
    en: "Commit to the best results and continuous improvement.", 
    idd: "Berkomitmen pada hasil terbaik dan peningkatan berkelanjutan.",
    icon: "⭐",
    color: "bg-purple-50 border-purple-200"
  },
  { 
    k: "Collaboration", 
    id: "Kolaborasi", 
    en: "Promote synergistic partnerships.", 
    idd: "Mengedepankan kerja sama yang sinergis.",
    icon: "🤝",
    color: "bg-green-50 border-green-200"
  },
  { 
    k: "Sustainability", 
    id: "Keberlanjutan", 
    en: "Focus on long-term societal and environmental benefits.", 
    idd: "Berorientasi pada manfaat jangka panjang bagi masyarakat dan lingkungan.",
    icon: "🌱",
    color: "bg-emerald-50 border-emerald-200"
  },
  { 
    k: "Customer Focus", 
    id: "Berorientasi pada Pelanggan", 
    en: "Proactively meet customer needs.", 
    idd: "Memahami dan memenuhi kebutuhan pelanggan secara proaktif.",
    icon: "👥",
    color: "bg-red-50 border-red-200"
  },
];

export function Values({ locale }: { locale: string }) {
  return (
    <section id="values" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Nilai-Nilai Perusahaan" : "Core Values"}
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "id" 
              ? "Landasan yang membentuk budaya kerja dan komitmen kami dalam melayani mitra dan pelanggan."
              : "The foundation that shapes our work culture and commitment to serving partners and customers."
            }
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.k} className={`p-8 ${v.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <div className="text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{locale === "id" ? v.id : v.k}</h3>
                <p className="text-gray-700 leading-relaxed">{locale === "id" ? v.idd : v.en}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}