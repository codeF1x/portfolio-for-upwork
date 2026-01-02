"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation"; // Use next-intl navigation
import { Menu, Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: t("skills"), href: "/skills" },
    { name: t("projects"), href: "/projects" },
    { name: t("process"), href: "/process" },
    { name: t("contact"), href: "/#contact" },
    { name: t("location"), href: "/location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-[9999] w-full border-b border-transparent transition-all duration-300",
        scrolled && !mobileMenuOpen
          ? "bg-background-dark/80 backdrop-blur-xl border-border-color"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Flynn WU</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-slate-200 md:block"
          >
            {t("hireMe")}
          </Link>
          <button
            type="button"
            className="flex items-center justify-center text-white md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505] md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <Terminal className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-white">Flynn WU</span>
              </div>
              <button
                type="button"
                className="text-slate-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-4">
                 <span className="text-slate-400 text-sm">Language</span>
                 <LanguageSwitcher />
              </div>
              <Link
                href="/#contact"
                className="mt-4 flex w-full items-center justify-center rounded-full bg-white py-3 text-base font-bold text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("hireMe")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
