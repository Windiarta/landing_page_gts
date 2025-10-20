"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";

const nav = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#vision", key: "vision" },
  { href: "#clients", key: "clients" },
  { href: "#values", key: "values" },
  { href: "#services", key: "services" },
  { href: "#advantages", key: "advantages" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#contact", key: "contact" },
];

export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const base = useMemo(() => `/${locale}`, [locale]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="GTS" width={32} height={32} className="rounded-lg" />
          <div className={`font-bold text-lg hidden sm:block transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            PT Ghraha Trimitra Selaras
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a 
              key={item.key} 
              href={`${base}/${item.href}`} 
              className={`text-sm font-medium transition-colors duration-300 hover:text-primaryBlue ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
            </a>
          ))}
        </nav>
        
        {/* Language Toggle */}
        <div className="flex items-center gap-3">
          <Link 
            href={pathname.replace(/^\/(en|id)/, "/en")} 
            className={`text-xs font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } ${pathname.includes('/en') ? 'opacity-100' : 'opacity-60'}`}
          >
            EN
          </Link>
          <span className={`opacity-40 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>|</span>
          <Link 
            href={pathname.replace(/^\/(en|id)/, "/id")} 
            className={`text-xs font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } ${pathname.includes('/id') ? 'opacity-100' : 'opacity-60'}`}
          >
            ID
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {nav.map((item) => (
              <a 
                key={item.key} 
                href={`${base}/${item.href}`} 
                className="block text-sm font-medium text-gray-700 hover:text-primaryBlue transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


