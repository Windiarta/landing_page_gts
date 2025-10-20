"use client";
import { useEffect, useState } from "react";
import { Card, SectionTitle, Button } from "@/components/ui";
import { formatInTimeZone } from "date-fns-tz";

export function ContactFooter({ locale }: { locale: string }) {
  return (
    <footer id="contact" className="mt-16 border-t border-black/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <SectionTitle>{locale === "id" ? "Kontak" : "Contact"}</SectionTitle>
          <p className="text-2xl font-bold mb-4">PT Ghraha Trimitra Selaras</p>
          <div className="space-y-2 text-md">
            <p>Jl. DR. Sumeru No.60, RT.02/RW.02, Menteng<br />Kec. Bogor Bar., <br />Kota Bogor,<br /> Jawa Barat 16111</p>
            <p>📱(0251) 8348079</p>
            <a href="mailto:info@gts-tech.id" className="text-primaryBlue hover:text-primaryBlue/80">📧info@gts-tech.id</a>
          </div>
        </div>
      </div>
      <div className="text-center text-white/60 text-xs py-4">© {new Date().getFullYear()} GTS Tech Consultant</div>
    </footer>
  );
}


