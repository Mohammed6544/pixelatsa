import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { SiX, SiDiscord, SiYoutube } from "react-icons/si";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactFooter = () => {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error(lang === "ar" ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed });

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.info(lang === "ar" ? "أنت مشترك بالفعل!" : "You're already subscribed!");
      } else {
        toast.error(lang === "ar" ? "حدث خطأ، حاول مجدداً" : "Something went wrong. Please try again.");
      }
      return;
    }

    setSubscribed(true);
    setEmail("");
    toast.success(lang === "ar" ? "تم الاشتراك بنجاح!" : "Successfully subscribed!");
  };

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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
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
            <div className="flex gap-4 pt-4">
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
                  className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <h3 className="text-xl font-semibold mb-2">{t("contact.newsletter")}</h3>
            <p className="text-muted-foreground text-sm mb-6">{t("contact.newsletterSub")}</p>

            {subscribed ? (
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle size={20} />
                <span className="font-medium">
                  {lang === "ar" ? "شكراً لاشتراكك!" : "Thanks for subscribing!"}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.placeholder")}
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 flex items-center gap-2"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {t("contact.subscribe")}
                </button>
              </form>
            )}
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
