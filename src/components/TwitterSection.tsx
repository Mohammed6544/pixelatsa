import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { SiX } from "react-icons/si";

const TwitterSection = () => {
  const { t, isRTL } = useLanguage();
  const [loading, setLoading] = useState(true);

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
          className="relative rounded-xl overflow-hidden border border-border"
        >
          {loading && (
            <div className="absolute inset-0 z-10 space-y-4 p-4 bg-background">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          )}
          <iframe
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/PixelatGames?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=en&maxHeight=600px&origin=https%3A%2F%2Fpixelatsa.lovable.app&showHeader=false&showReplies=false&theme=dark&transparent=true&widgetsVersion=2615f7e52b7e0%3A1702314776716"
            style={{ width: "100%", height: "600px", border: "none" }}
            title="@PixelatGames on X"
            onLoad={() => setLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <a
            href="https://x.com/PixelatGames"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <SiX className="w-4 h-4" />
            {isRTL ? "تابعنا على X" : "Follow us on X"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TwitterSection;
