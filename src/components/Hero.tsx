import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const PixelText = ({ text, delay = 0, className = "", byWord = false }: { text: string; delay?: number; className?: string; byWord?: boolean }) => {
  const units = byWord ? text.split(" ") : text.split("");
  const gap = byWord ? 0.12 : 0.04;

  return (
    <span className={`inline-flex flex-wrap justify-center ${byWord ? "gap-x-[0.3em]" : ""} ${className}`}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", scale: 0.5 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.15,
            delay: delay + i * gap,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{
            minWidth: !byWord && unit === " " ? "0.3em" : undefined,
          }}
        >
          {!byWord && unit === " " ? "\u00A0" : unit}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const { t, lang } = useLanguage();
  const isArabic = lang === "ar";

  const line1 = t("hero.line1");
  const line2 = t("hero.line2");

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 end-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-3xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight font-display">
          <PixelText text={line1} delay={0.2} byWord={isArabic} />
          <br />
          <PixelText text={line2} delay={0.2 + (isArabic ? line1.split(" ").length * 0.12 : line1.length * 0.04) + 0.3} className="text-primary" byWord={isArabic} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#games"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow-sm"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#team"
            className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
