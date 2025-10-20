import { AnchorButton, Button } from "@/components/ui";

export function Hero({ locale }: { locale: string }) {
  const t = (key: string) =>
    ({
      en: {
        title: "PT Ghraha Trimitra Selaras",
        tagline: "Empowering Innovation Through Technology",
        cta: "Learn More",
      },
      id: {
        title: "PT Ghraha Trimitra Selaras",
        tagline: "Inovasi yang Memberdayakan.",
        cta: "Pelajari Lebih Lanjut",
      },
    } as const)[locale as "en" | "id"][key as "title" | "tagline" | "cta"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue via-blue-600 to-primaryRed opacity-90" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {t("tagline")}
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <AnchorButton 
            href={`/${locale}#portfolio`}
            className="bg-white text-primaryBlue hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            {t("cta")}
          </AnchorButton>
          <AnchorButton 
            href="mailto:info@gts-tech.id"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {locale === "id" ? "Hubungi Kami" : "Contact Us"}
          </AnchorButton>
        </div>
        
        {/* Stats */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-sm sm:text-base text-blue-100">{locale === "id" ? "Tahun Pengalaman" : "Years Experience"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm sm:text-base text-blue-100">{locale === "id" ? "Proyek Selesai" : "Projects Completed"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-sm sm:text-base text-blue-100">{locale === "id" ? "Klien Puas" : "Happy Clients"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm sm:text-base text-blue-100">{locale === "id" ? "Dukungan Teknis" : "Technical Support"}</div>
          </div>
        </div> */}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}


