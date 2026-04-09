import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

const TwitterSection = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWidget = () => {
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load(containerRef.current);
        setTimeout(() => setLoading(false), 1500);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        (window as any).twttr?.widgets?.load(containerRef.current);
        setTimeout(() => setLoading(false), 1500);
      };
      document.body.appendChild(script);
    };

    loadWidget();
  }, []);

  return (
    <section className="py-24 px-4 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("twitter.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("twitter.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          ref={containerRef}
        >
          {loading && (
            <div className="space-y-4">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          )}
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-height="600"
            data-chrome="noheader nofooter noborders transparent"
            href="https://x.com/PixelatGames"
          >
            Loading tweets…
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TwitterSection;
