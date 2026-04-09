import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { SiX } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const TwitterSection = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    // Try loading Twitter's official widget
    const timeout = setTimeout(() => {
      // If after 5 seconds the widget hasn't rendered, show fallback
      if (!embedLoaded) {
        setEmbedFailed(true);
      }
    }, 5000);

    const loadWidget = () => {
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load(containerRef.current).then(() => {
          setEmbedLoaded(true);
          clearTimeout(timeout);
        });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        (window as any).twttr?.widgets?.load(containerRef.current).then(() => {
          setEmbedLoaded(true);
          clearTimeout(timeout);
        });
      };
      script.onerror = () => {
        setEmbedFailed(true);
        clearTimeout(timeout);
      };
      document.body.appendChild(script);
    };

    loadWidget();

    return () => clearTimeout(timeout);
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
          ref={containerRef}
        >
          {/* Twitter embed - hidden if failed */}
          <div className={embedFailed && !embedLoaded ? "hidden" : ""}>
            {!embedLoaded && (
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
          </div>

          {/* Fallback when embed fails */}
          {embedFailed && !embedLoaded && (
            <a
              href="https://x.com/PixelatGames"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12 text-center hover:border-primary/50 transition-all duration-300 hover:bg-card/80">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <SiX className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  @PixelatGames
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  {isRTL
                    ? "تابعنا على X للحصول على آخر التحديثات والأخبار ومحتوى خلف الكواليس."
                    : "Follow us on X for the latest updates, news, and behind-the-scenes content."}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  {isRTL ? "تابعنا على X" : "Follow us on X"}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TwitterSection;
