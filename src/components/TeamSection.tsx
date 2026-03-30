import { useLanguage } from "@/contexts/LanguageContext";
import { teamMembers } from "@/data/teamData";
import { motion } from "framer-motion";

const TeamSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display">{t("team.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t("team.subtitle")}</p>
        </motion.div>

        {/* Cinematic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name[lang]}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                {/* Accent line */}
                <div className="w-8 h-0.5 bg-primary mb-4 transition-all duration-300 group-hover:w-12" />

                <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight tracking-tight">
                  <span className="font-light">{member.name[lang].split(" ")[0]}</span>
                  <br />
                  <span className="font-bold uppercase">{member.name[lang].split(" ").slice(1).join(" ")}</span>
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-3">
                  {member.role[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
