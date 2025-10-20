import { Card, SectionTitle } from "@/components/ui";

export function About({ locale }: { locale: string }) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Tentang GTS" : "About GTS"}
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "id" 
              ? "Perusahaan teknologi terdepan yang berkomitmen menghadirkan solusi inovatif untuk kemajuan masyarakat."
              : "A leading technology company committed to delivering innovative solutions for societal progress."
            }
          </p>
        </div>
        
        {/* Logo and Description */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-black">PT Ghraha Trimitra Selaras (GTS)</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {locale === "id" 
                  ? "adalah perusahaan swasta nasional berfokus pada pengembangan teknologi dan solusi elektronik terintegrasi untuk menghadirkan layanan dan inovasi terbaik."
                  : "is an Indonesian private company focusing on technology development and integrated electronic solutions, delivering efficient and competitive innovations."
                }
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primaryBlue mb-1">2008</div>
                  <div className="text-sm text-gray-600">{locale === "id" ? "Tahun Didirikan" : "Founded"}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">{locale === "id" ? "Tahun Pengalaman" : "Years Experience"}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-primaryBlue to-primaryRed rounded-3xl p-8 text-white">
                <div className="text-center">
                  <img src="/logo.png" width={250} height={200}></img>
                  <h4 className="text-xl font-bold mb-4">{locale === "id" ? "Identitas Perusahaan" : "Company Identity"}</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-primaryBlue">📍</span>
                      <span className="text-sm text-black">Jl. DR. Sumeru No.60, Menteng, Bogor Barat 16111</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primaryBlue">📞</span>
                      <span className="text-sm text-black">(0251) 8348079</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primaryBlue">✉️</span>
                      <span className="text-sm text-black">info@gts-tech.id</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


