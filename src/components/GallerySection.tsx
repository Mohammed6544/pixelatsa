import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import studio1 from "@/assets/gallery/studio_1.jpeg";
import studio2 from "@/assets/gallery/studio_2.jpeg";
import studio3 from "@/assets/gallery/studio_3.jpeg";
import studio4 from "@/assets/gallery/studio_4.jpg";

const galleryImages = [
  { id: 1, src: studio1 },
  { id: 2, src: studio2 },
  { id: 3, src: studio3 },
  { id: 4, src: studio4 },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display">{t("gallery.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">{t("gallery.subtitle")}</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img.id)}
              className="cursor-pointer rounded-xl overflow-hidden border border-border break-inside-avoid group"
            >
              <img
                src={img.src}
                alt={`Studio Photo ${img.id}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 end-6 text-foreground hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={galleryImages.find((g) => g.id === selected)?.src}
                alt={`Studio Photo ${selected}`}
                className="max-w-full max-h-[85vh] rounded-2xl border border-border object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
