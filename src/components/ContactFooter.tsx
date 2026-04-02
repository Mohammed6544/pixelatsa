import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SiX, SiDiscord, SiYoutube } from "react-icons/si";

const ContactFooter = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{t("contact.email")}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{t("contact.location")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {[
              { icon: SiX, href: "https://x.com/PixelatGames", label: "Twitter" },
              { icon: SiYoutube, href: "https://www.youtube.com/@pixelatgames", label: "YouTube" },
              { icon: SiDiscord, href: "https://discord.gg/vdv9dxWe", label: "Discord" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t("contact.copyright")}</p>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            {["home", "team", "story", "contact"].map((key) => (
              <a key={key} href={`#${key}`} className="hover:text-foreground transition-colors">
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
