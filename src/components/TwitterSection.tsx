import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiX } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

type EmbedState = "loading" | "ready" | "fallback";

const TWITTER_WIDGET_URL = "https://platform.twitter.com/widgets.js";
const TWITTER_PROFILE_URL = "https://x.com/PixelatGames";

const TwitterSection = () => {
  const { t, isRTL } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [embedState, setEmbedState] = useState<EmbedState>("loading");

  useEffect(() => {
    let cancelled = false;
    let fallbackTimeout = 0;

    const markFallback = () => {
      if (cancelled) return;
      window.clearTimeout(fallbackTimeout);
      setEmbedState("fallback");
    };

    const markReadyIfRendered = () => {
      if (cancelled) return;

      const iframe = timelineRef.current?.querySelector("iframe");
      const iframeSrc = iframe?.getAttribute("src") ?? "";
      const hasRealEmbed = Boolean(iframe && iframeSrc && iframeSrc !== "about:blank");

      window.clearTimeout(fallbackTimeout);
      setEmbedState(hasRealEmbed ? "ready" : "fallback");
    };

    const loadTwitterSdk = () =>
      new Promise<any>((resolve, reject) => {
        if ((window as any).twttr?.widgets?.createTimeline) {
          resolve((window as any).twttr);
          return;
        }

        const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${TWITTER_WIDGET_URL}"]`);

        const handleReady = () => {
          const twttr = (window as any).twttr;

          if (twttr?.ready) {
            twttr.ready(() => resolve(twttr));
            return;
          }

          if (twttr?.widgets?.createTimeline) {
            resolve(twttr);
            return;
          }

          reject(new Error("Twitter widgets unavailable"));
        };

        if (existingScript) {
          existingScript.addEventListener("load", handleReady, { once: true });
          window.setTimeout(() => {
            if (!(window as any).twttr?.widgets?.createTimeline) {
              reject(new Error("Twitter script timeout"));
            }
          }, 2500);
          return;
        }

        const script = document.createElement("script");
        script.src = TWITTER_WIDGET_URL;
        script.async = true;
        script.onload = handleReady;
        script.onerror = () => reject(new Error("Failed to load Twitter SDK"));
        document.body.appendChild(script);
      });

    const renderTimeline = async () => {
      try {
        const twttr = await loadTwitterSdk();
        const container = timelineRef.current;

        if (!container || cancelled) return;

        container.innerHTML = "";

        fallbackTimeout = window.setTimeout(markFallback, 4500);

        await twttr.widgets.createTimeline(
          {
            sourceType: "profile",
            screenName: "PixelatGames",
          },
          container,
          {
            dnt: true,
            theme: "dark",
            height: 600,
            chrome: "noheader nofooter noborders transparent",
          },
        );

        window.setTimeout(markReadyIfRendered, 600);
      } catch {
        markFallback();
      }
    };

    renderTimeline();

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <section className="bg-background px-4 py-24" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("twitter.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("twitter.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {embedState === "loading" && (
            <div className="space-y-4" aria-hidden="true">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          )}

          {embedState !== "fallback" && (
            <div
              ref={timelineRef}
              className={embedState === "loading" ? "pointer-events-none absolute inset-0 opacity-0" : "min-h-[600px]"}
            />
          )}

          {embedState === "fallback" && (
            <a
              href={TWITTER_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-2xl border border-border bg-card/60 p-8 text-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/90 md:p-12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <SiX className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">@PixelatGames</h3>
                <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                  {isRTL
                    ? "تعذّر تحميل خلاصة X مباشرة، لكن يمكنك متابعة آخر التحديثات من حسابنا الرسمي."
                    : "We couldn’t load the live X feed here, but you can still follow our latest updates on the official profile."}
                </p>
                <span className="inline-flex items-center gap-2 font-medium text-primary transition-all group-hover:gap-3">
                  {isRTL ? "فتح حساب X" : "Open X profile"}
                  <ExternalLink className="h-4 w-4" />
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
