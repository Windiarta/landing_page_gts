import Image from "next/image";
import { Card, SectionTitle } from "@/components/ui";

const projects = [
  {
    title: "AI Analytics Platform",
    desc: "Predictive analytics and dashboards for enterprise operations.",
    img: "/window.svg",
  },
  {
    title: "FinTech Mobile App",
    desc: "Secure payments and real-time notifications.",
    img: "/globe.svg",
  },
  {
    title: "IoT Monitoring Suite",
    desc: "Device telemetry, alerts, and remote control.",
    img: "/file.svg",
  },
];

export function Projects({ locale }: { locale: string }) {
  return (
    <section id="projects" className="py-16">
      <SectionTitle>{locale === "id" ? "Proyek Unggulan" : "Featured Projects"}</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image src={p.img} alt="" width={24} height={24} />
              <h3 className="font-semibold">{p.title}</h3>
            </div>
            <p className="text-sm text-black/70">{p.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}


