import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FileText } from "lucide-react";
import { SiSteam } from "react-icons/si";

import game1Poster from "@/assets/games/game_1_poster.png";
import game1Banner from "@/assets/games/game_1_banner.png";
import game2Poster from "@/assets/games/game_2_poster.jpg";
import game2Banner from "@/assets/games/game_2_banner.jpg";
import game3Poster from "@/assets/games/game_3_poster.png";
import game3Banner from "@/assets/games/game_3_banner.png";

interface Game {
  id: string;
  poster: string;
  banner: string;
  titleKey: string;
  descKey: string;
  platforms: { name: string; url: string }[];
  featured?: boolean;
}

const games: Game[] = [
  {
    id: "game3",
    poster: game3Poster,
    banner: game3Banner,
    titleKey: "games.game3.title",
    descKey: "games.game3.description",
    platforms: [],
    featured: true,
  },
  {
    id: "game1",
    poster: game1Poster,
    banner: game1Banner,
    titleKey: "games.game1.title",
    descKey: "games.game1.description",
    platforms: [
      { name: "itch.io", url: "https://s41lem.itch.io/what-remains-of-her" },
    ],
  },
  {
    id: "game2",
    poster: game2Poster,
    banner: game2Banner,
    titleKey: "games.game2.title",
    descKey: "games.game2.description",
    platforms: [
      { name: "itch.io", url: "https://s41lem.itch.io/two-thieves" },
    ],
  },
];

const FeaturedGameCard = ({ game }: { game: Game }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden border-2 border-primary/50 group mb-4"
    >
      {/* Animated glow border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/60 via-primary/20 to-primary/60 opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-700 animate-pulse" />

      <div className="relative rounded-2xl overflow-hidden bg-background">
        {/* Banner background — larger and more visible */}
        <div className="absolute inset-0">
          <img
            src={game.banner}
            alt=""
            className="w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent rtl:bg-gradient-to-l" />
        </div>

        {/* Top-right action buttons */}
        <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 flex items-center gap-2">
          <motion.a
            href="https://drive.google.com/drive/folders/1eNoVyY_I4FNt_8PsRyNbzYtlUbEfyWnk?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-primary-foreground backdrop-blur-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            <FileText size={16} />
            <span className="text-sm font-bold">{t("games.pressKit")}</span>
          </motion.a>
          <motion.a
            href="https://store.steampowered.com/app/4586090/Remaining_Kingdom/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm hover:bg-primary/30 transition-colors"
          >
            <SiSteam size={16} className="text-primary" />
            <span className="text-sm font-bold text-primary">{t("games.comingSoon")}</span>
          </motion.a>
        </div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12 md:p-16">
          {/* Poster — larger for featured */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-lg opacity-60" />
              <img
                src={game.poster}
                alt={t(game.titleKey)}
                className="relative w-48 sm:w-56 md:w-64 rounded-xl border-2 border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex-1 text-center md:text-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {t(game.titleKey)}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mb-6 mx-auto md:mx-0 rounded-full" />
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8 text-base sm:text-lg">
                {t(game.descKey)}
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <motion.a
                  href="https://store.steampowered.com/app/4586090/Remaining_Kingdom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-sm font-bold text-primary hover:bg-primary/20 transition-colors"
                >
                  <SiSteam size={18} />
                  {t("games.comingSoon")}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GamesSection = () => {
  const { t } = useLanguage();

  const featuredGame = games.find((g) => g.featured);
  const otherGames = games.filter((g) => !g.featured);

  return (
    <section id="games" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display">
            {t("games.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            {t("games.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured game */}
          {featuredGame && <FeaturedGameCard game={featuredGame} />}

          {/* Other games */}
          {otherGames.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-border group"
            >
              <div className="absolute inset-0">
                <img
                  src={game.banner}
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 rtl:bg-gradient-to-l" />
              </div>

              <div className="relative flex flex-col sm:flex-row items-center gap-8 p-8 sm:p-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shrink-0"
                >
                  <img
                    src={game.poster}
                    alt={t(game.titleKey)}
                    className="w-40 sm:w-48 rounded-xl border border-border shadow-lg shadow-black/40"
                  />
                </motion.div>

                <div className="flex-1 text-center sm:text-start">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3">
                    {t(game.titleKey)}
                  </h3>
                  <div className="w-16 h-0.5 bg-primary mb-4 mx-auto sm:mx-0 rtl:sm:me-0 rtl:sm:ms-0" />
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    {t(game.descKey)}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {t("games.availableOn")}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                      {game.platforms.map((p) => (
                        <a
                          key={p.name}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border text-sm font-medium text-foreground transition-colors"
                        >
                          {p.name}
                          <ExternalLink size={14} className="opacity-60" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
