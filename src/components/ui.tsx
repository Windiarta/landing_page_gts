import Link from "next/link";
import type { ComponentProps } from "react";

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight text-black ${className}`}>
      {children}
    </h2>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-black/10 shadow-sm ${className}`}>{children}</div>
  );
}

export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white ${className}`}
      {...props}
    />
  );
}

export function AnchorButton({ className = "", ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2 font-medium transition-colors bg-primaryBlue text-blue-500 hover:bg-blue-700 ${className}`}
      {...props}
    />
  );
}


