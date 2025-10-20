import { Card, SectionTitle } from "@/components/ui";

export function VisionMission({ locale }: { locale: string }) {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-primaryBlue to-primaryRed relative overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-black mb-4">
            {locale === "id" ? "Visi & Misi" : "Vision & Mission"}
          </SectionTitle>
          <p className="text-lg text-black max-w-3xl mx-auto">
            {locale === "id" 
              ? "Landasan yang mengarahkan setiap langkah kami dalam menghadirkan solusi teknologi terbaik."
              : "The foundation that guides every step we take in delivering the best technology solutions."
            }
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-black/20">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-black mb-4">{locale === "id" ? "Visi" : "Vision"}</h3>
            </div>
            <p className="text-lg text-black leading-relaxed text-center">
              {locale === "id"
                ? "Menjadi perusahaan teknologi terdepan yang berperan aktif dalam membangun kemajuan masyarakat, dengan menghadirkan solusi inovatif yang membantu mitra dan pelanggan meraih keuntungan maksimal serta pertumbuhan berkelanjutan."
                : "To be a leading technology company actively contributing to societal progress by delivering innovative solutions that enable partners and customers to achieve maximum benefits and sustainable growth."}
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-black/20">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold text-nlack mb-4">{locale === "id" ? "Misi" : "Mission"}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">•</span>
                <p className="text-black">{locale === "id" ? "Memberdayakan mitra dan pelanggan melalui teknologi bernilai tinggi." : "Empower partners and customers through high-value technology."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">•</span>
                <p className="text-black">{locale === "id" ? "Menciptakan solusi teknologi inovatif untuk efisiensi dan profitabilitas." : "Create innovative tech solutions for efficiency and profitability."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">•</span>
                <p className="text-black">{locale === "id" ? "Berperan aktif dalam pembangunan sosial yang inklusif." : "Actively contribute to inclusive social development."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">•</span>
                <p className="text-black">{locale === "id" ? "Menjalin kemitraan berkelanjutan berbasis kepercayaan." : "Build sustainable partnerships based on trust."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">•</span>
                <p className="text-black">{locale === "id" ? "Menumbuhkan budaya inovatif dan etis." : "Foster an innovative and ethical culture."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}