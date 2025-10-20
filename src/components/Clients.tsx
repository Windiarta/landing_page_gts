import Image from "next/image";
import { Card, SectionTitle } from "@/components/ui";

const logos = [
  { src: "/hid_logo.png", alt: "HID Indonesia" },
  { src: "/dishub.png", alt: "Dishub Pekanbaru" },
  { src: "/kb_logo.jpg", alt: "KB Bank" },
  { src: "/bri_logo.svg", alt: "BRI" },
  { src: "/ocbc_logo.png", alt: "OCBC Bank" },
  { src: "/yabisa_logo.jpg", alt: "Yabisa" },
  { src: "/yabisa_parking.png", alt: "Yabisa Parking" },
  // { src: "/mti_logo.png", alt: "MTI" },
  { src: "/akar_inti.jpg", alt: "Akar Inti" },
];

export function Clients({ locale }: { locale: string }) {
  return (
    <section id="clients" className="py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle className="text-4xl font-bold text-black mb-4">
            {locale === "id" ? "Klien & Mitra" : "Clients & Partners"}
          </SectionTitle>
        </div>
        <div className="grid gap-6 mt-10">
          <div className="relative overflow-hidden">
            <div className="marquee">
              {[...logos, ...logos].map((l, idx) => (
                <div key={l.alt + idx} className="flex items-center justify-center opacity-80 shrink-0">
                  <Image src={l.src} alt={l.alt} width={100} height={40} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


