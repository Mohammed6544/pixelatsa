import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiX } from "react-icons/si";
import { ExternalLink } from "lucide-react";

interface NewsPost {
  platform: "x" | "linkedin";
  url: string;
  date: string;
  dateAr: string;
  text: string;
  textAr?: string;
  image?: string;
  hasVideo?: boolean;
  likes?: number;
  retweets?: number;
}

const newsPosts: NewsPost[] = [
  {
    platform: "x",
    url: "https://x.com/PixelatGames",
    date: "Apr 2026",
    dateAr: "أبريل ٢٠٢٦",
    text: "Stay tuned for our latest updates! Follow us on X to be the first to know about Remaining Kingdom and all our upcoming projects. 🎮🔥",
    textAr: "ترقبوا آخر أخبارنا! تابعونا على X لتكونوا أول من يعرف عن المملكة المتبقية وجميع مشاريعنا القادمة. 🎮🔥",
    likes: 0,
    retweets: 0,
  },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/60" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const NewsCard = ({ post, isRTL }: { post: NewsPost; isRTL: boolean }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block group h-full"
  >
    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 h-full">
      {post.image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {post.hasVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/30">
              <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-primary-foreground ml-0.5"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          {post.platform === "x" ? <XIcon /> : null}
          <span className="text-xs text-muted-foreground/60 font-body">
            {isRTL ? post.dateAr : post.date}
          </span>
        </div>

        <p
          className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line"
          dir="auto"
        >
          {isRTL && post.textAr ? post.textAr : post.text}
        </p>

        {(post.likes !== undefined || post.retweets !== undefined) && (
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground/50">
            {post.likes !== undefined && <span>❤️ {post.likes}</span>}
            {post.retweets !== undefined && <span>🔁 {post.retweets}</span>}
          </div>
        )}
      </div>
    </div>
  </a>
);

const TwitterSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-24 px-4 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.4em] uppercase text-primary font-medium mb-4"
          >
            {isRTL ? "أخبار وتحديثات" : "News & Updates"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground tracking-wide"
          >
            {t("twitter.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {newsPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <NewsCard post={post} isRTL={isRTL} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://x.com/PixelatGames"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm tracking-wide"
          >
            <SiX className="w-4 h-4" />
            {isRTL ? "تابعنا على X لمزيد من الأخبار" : "Follow us on X for more updates"}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TwitterSection;
