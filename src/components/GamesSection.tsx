import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import game1Poster from "@/assets/games/game_1_poster.png";
import game1Banner from "@/assets/games/game_1_banner.png";
import game2Poster from "@/assets/games/game_2_poster.jpg";
import game2Banner from "@/assets/games/game_2_banner.jpg";

interface Game {
  id: string;
  poster: string;
  banner: string;
  titleKey: string;
  descKey: string;
  platforms: { name: string; url: string }[];
}

const games: Game[] = [
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

const GamesSection = () => {
  const { t } = useLanguage();

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
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-border group"
            >
              {/* Banner background */}
              <div className="absolute inset-0">
                <img
                  src={game.banner}
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 rtl:bg-gradient-to-l" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col sm:flex-row items-center gap-8 p-8 sm:p-12">
                {/* Poster */}
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

                {/* Info */}
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
