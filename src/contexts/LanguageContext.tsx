import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations, type Language } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  const t = useCallback(
    (key: string): any => {
      const keys = key.split(".");
      let result: any = translations[lang];
      for (const k of keys) {
        result = result?.[k];
      }
      return result !== undefined ? result : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
