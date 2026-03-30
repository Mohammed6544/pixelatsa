import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const StorySection = () => {
  const { t } = useLanguage();
  const milestones = t("story.milestones") as unknown as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  // Fallback if translation returns string key
  const items = Array.isArray(milestones) ? milestones : [];

  return (
    <section id="story" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display">{t("story.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t("story.subtitle")}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute start-6 sm:start-1/2 top-0 bottom-0 w-px bg-border" />

          {items.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start mb-16 sm:mb-20 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute start-6 sm:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-sm z-10 mt-1" />

                {/* Content */}
                <div className={`ms-14 sm:ms-0 sm:w-1/2 ${isEven ? "sm:pe-12 sm:text-end" : "sm:ps-12 sm:text-start"}`}>
                  <span className="text-primary font-bold text-lg font-display">{milestone.year}</span>
                  <h3 className="text-xl font-semibold mt-1">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
