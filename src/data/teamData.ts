import { type Language } from "@/i18n/translations";

import mohammedImg from "@/assets/team/mohammed.jpg";
import abdulazizImg from "@/assets/team/abdulaziz.jpg";
import salemImg from "@/assets/team/salem.jpg";
import anwarImg from "@/assets/team/anwar.jpg";
import basilImg from "@/assets/team/basil.jpg";
import catImg from "@/assets/team/cat.jpg";

export interface TeamMember {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  category: string;
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: { en: "Mohammed Alyami", ar: "محمد اليامي" },
    role: { en: "Game Director", ar: "مخرج اللعبة" },
    bio: { en: "Leads the creative and production vision of the studio.", ar: "يقود الرؤية الإبداعية والإنتاجية للاستوديو." },
    category: "leadership",
    image: mohammedImg,
  },
  {
    id: "2",
    name: { en: "Abdulaziz Alsada", ar: "عبدالعزيز الصدي" },
    role: { en: "Lead Narrative Designer", ar: "مصمم قصصي رئيسي" },
    bio: { en: "Crafts the stories and worlds that define our games.", ar: "يصنع القصص والعوالم التي تحدد ألعابنا." },
    category: "design",
    image: abdulazizImg,
  },
  {
    id: "3",
    name: { en: "Salem Bahallah", ar: "سالم باحله" },
    role: { en: "Lead Programmer", ar: "مبرمج رئيسي" },
    bio: { en: "Architects the systems and engines powering our games.", ar: "يبني الأنظمة والمحركات التي تشغّل ألعابنا." },
    category: "engineering",
    image: salemImg,
  },
  {
    id: "5",
    name: { en: "Anwaar Alsayed", ar: "أنوار السيد" },
    role: { en: "Lead Artist", ar: "فنانة رئيسية" },
    bio: { en: "Defines the visual identity and art direction of our games.", ar: "تحدد الهوية البصرية والتوجيه الفني لألعابنا." },
    category: "art",
    image: anwarImg,
  },
  {
    id: "6",
    name: { en: "Basil Hussain", ar: "باسل حسين" },
    role: { en: "2D Artist / Animator", ar: "فنان ثنائي الأبعاد / محرك رسوم" },
    bio: { en: "Brings characters and worlds to life through animation.", ar: "يبث الحياة في الشخصيات والعوالم من خلال الرسوم المتحركة." },
    category: "art",
    image: basilImg,
  },
  {
    id: "4",
    name: { en: "Luna", ar: "لونا" },
    role: { en: "Emotional Support", ar: "دعم معنوي" },
    bio: { en: "Keeps the team sane during crunch time.", ar: "يحافظ على هدوء الفريق أثناء أوقات الضغط." },
    category: "community",
    image: catImg,
  },
];
