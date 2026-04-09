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
              onClick={() => member.linkedin && window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
            >
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name[lang]}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* LinkedIn icon */}
              {member.linkedin && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
              )}

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
