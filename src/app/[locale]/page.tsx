import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { ContactFooter } from "@/components/ContactFooter";
import { VisionMission } from "@/components/VisionMission";
import { Values } from "@/components/Values";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { Portfolio } from "@/components/Portfolio";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-white text-black">
      <Header locale={locale} />
      <main >
        <Hero locale={locale} />
        {/* <Projects locale={locale} /> */}
        <About locale={locale} />
        <VisionMission locale={locale} />
        <Clients locale={locale} />
        <Values locale={locale} />
        <Services locale={locale} />
        <Advantages locale={locale} />
        <Portfolio locale={locale} />
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}


