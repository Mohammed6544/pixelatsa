import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const { t, lang, setLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "home", href: "#home" },
    { key: "games", href: "#games" },
    { key: "team", href: "#team" },
    { key: "story", href: "#story" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Pixelat Games" className="h-9 w-auto rounded" />
          <span className="text-xl font-bold font-display text-primary tracking-tight">Pixelat Games</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1eNoVyY_I4FNt_8PsRyNbzYtlUbEfyWnk?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            <FileText size={16} />
            {lang === "en" ? "Press Kit" : "حقيبة صحفية"}
          </a>
          <a
            href="https://discord.gg/8hsMbyZyxR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <SiDiscord size={16} />
            {lang === "en" ? "Join our Discord" : "انضم لديسكورد"}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="px-3 py-1.5 rounded-md text-xs font-bold bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <a
                href="https://drive.google.com/drive/folders/1eNoVyY_I4FNt_8PsRyNbzYtlUbEfyWnk?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
              >
                <FileText size={16} />
            {lang === "en" ? "Press Kit" : "حقيبة صحفية"}
              </a>
              <a
                href="https://discord.gg/8hsMbyZyxR"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <SiDiscord size={16} />
                {lang === "en" ? "Join our Discord" : "انضم لديسكورد"}
              </a>
              <button
                onClick={() => {
                  setLang(lang === "en" ? "ar" : "en");
                  setMobileOpen(false);
                }}
                className="px-4 py-2 rounded-md text-sm font-bold bg-secondary text-secondary-foreground"
              >
                {lang === "en" ? "عربي" : "EN"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
