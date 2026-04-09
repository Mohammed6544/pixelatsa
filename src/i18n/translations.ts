export type Language = "en" | "ar";

export const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      team: "Team",
      story: "Story",
      games: "Games",
      contact: "Contact",
    },
    hero: {
      line1: "We Build Worlds",
      line2: "One Pixel at a Time",
      subtitle:
        "An independent studio from the heart of Saudi Arabia, crafting unforgettable interactive experiences.\n",
      cta1: "Our Games",
      cta2: "Meet the Team",
    },
    team: {
      title: "The People Behind the Magic",
      subtitle:
        "A diverse crew of passionate creators pushing the boundaries of interactive art.",
      search: "Search by name or role…",
      all: "All",
      leadership: "Leadership",
      art: "Art",
      engineering: "Engineering",
      design: "Design",
      production: "Production",
      community: "Community",
    },
    story: {
      title: "Our Journey",
      subtitle: "From a spark of an idea to a studio that dreams big.",
      milestones: [
        {
          year: "2025 — September",
          title: "The Spark",
          description:
            "Three childhood friends set out to build the game they had always dreamed of playing. No budget, no office, just passion, determination, and a shared vision.",
        },
        {
          year: "2025 — October",
          title: "First Prototype",
          description:
            "After a month of late nights and relentless iteration, the first playable demo came to life. The reaction from early testers was electric, and that was when we knew we were onto something special.",
        },
        {
          year: "2025 — November",
          title: "Winning Our First Game Jam",
          description:
            "We won the Saudi Game Champion competition among thousands of participants, earning a place in the incubator program and marking our first major milestone.",
        },
        {
          year: "2025 — December",
          title: "Studio Founded",
          description:
            "We officially incorporated the studio and turned our passion project into something real. What began as an idea between friends had become a true company with a clear future ahead.",
        },
        {
          year: "2026 — October",
          title: "Launch Our First Game",
          description:
            "The next big milestone: launching our first game and sharing our vision with players everywhere.",
        },
      ],
    },
    games: {
      title: "Our Games",
      subtitle: "Explore the worlds we've crafted.",
      availableOn: "Available on",
      comingSoon: "Coming to Steam",
      game3: {
        title: "Remaining Kingdom",
        description:
          "A dark fantasy roguelike that fuses deckbuilding, real-time card combat, and tower defense into a single run-based experience. Choose a fallen Lord and fight through a ruined world where every act, battle, relic, and event pushes your build in a different direction. Summon units, cast spells in real time, adapt to shifting encounters, and shape your strategy through cards, potions, relics, and dangerous choices.",
      },
      game1: {
        title: "What Remains of Her",
        description:
          "A story-driven mystery horror game in which Khaled arrives at a remote village haunted by the legend of a demon that can take human shape and feed on human emotion. When the villagers accuse a young girl of being the creature, Khaled must investigate the truth before fear and suspicion claim another victim.",
      },
      game2: {
        title: "Two Thieves",
        description:
          "A fast local 2D competitive platform shooter set under an Arabian-night sky of floating ruins, moonlit silhouettes, and enchanted gates. Two players constantly switch roles between Runner and Hunter in a tense battle of control and pressure.",
      },
    },
    gallery: {
      title: "Life at the Studio",
      subtitle: "Behind the scenes — where the magic happens.",
    },
    twitter: {
      title: "Latest News",
      subtitle: "Follow our journey and stay up to date.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Drop us a line or follow along.",
      email: "info@pixelat.sa",
      location: "Riyadh, Saudi Arabia",
      newsletter: "Stay in the Loop",
      newsletterSub: "Get updates on our projects and studio news.",
      placeholder: "your@email.com",
      subscribe: "Subscribe",
      copyright: "© 2026 Pixelat Games. All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      team: "الفريق",
      story: "قصتنا",
      games: "ألعابنا",
      contact: "تواصل",
    },
    hero: {
      line1: "نبني عوالم",
      line2: "بكسل تلو الآخر",
      subtitle:
        "استوديو مستقل من قلب المملكة العربية السعودية، نصنع تجارب تفاعلية لا تُنسى.\n",
      cta1: "ألعابنا",
      cta2: "تعرّف على الفريق",
    },
    team: {
      title: "الأشخاص وراء السحر",
      subtitle: "فريق متنوع من المبدعين الشغوفين يدفعون حدود الفن التفاعلي.",
      search: "ابحث بالاسم أو الدور…",
      all: "الكل",
      leadership: "القيادة",
      art: "الفن",
      engineering: "الهندسة",
      design: "التصميم",
      production: "الإنتاج",
      community: "المجتمع",
    },
    story: {
      title: "رحلتنا",
      subtitle: "من شرارة فكرة إلى استوديو يحلم بالكبير.",
      milestones: [
        {
          year: "٢٠٢٥ — سبتمبر",
          title: "الشرارة",
          description:
            "ثلاثة أصدقاء طفولة انطلقوا لبناء اللعبة التي طالما حلموا بلعبها. بدون ميزانية، بدون مكتب، فقط شغف وإصرار ورؤية مشتركة.",
        },
        {
          year: "٢٠٢٥ — أكتوبر",
          title: "أول نموذج",
          description:
            "بعد شهر من السهر والتكرار المستمر، وُلد أول نموذج قابل للعب. كان رد فعل المختبرين الأوائل مذهلاً، وعندها عرفنا أننا على الطريق الصحيح.",
        },
        {
          year: "٢٠٢٥ — نوفمبر",
          title: "الفوز بأول مسابقة",
          description:
            "فزنا بمسابقة بطل الألعاب السعودية من بين آلاف المشاركين، وحصلنا على مقعد في برنامج الحاضنة مسجّلين أول إنجاز كبير لنا.",
        },
        {
          year: "٢٠٢٥ — ديسمبر",
          title: "تأسيس الاستوديو",
          description:
            "أسسنا الاستوديو رسمياً وحوّلنا مشروع الشغف إلى شيء حقيقي. ما بدأ كفكرة بين أصدقاء أصبح شركة حقيقية بمستقبل واضح.",
        },
        {
          year: "٢٠٢٦ — أكتوبر",
          title: "إطلاق أول لعبة",
          description:
            "الإنجاز الكبير القادم: إطلاق أول لعبة لنا ومشاركة رؤيتنا مع اللاعبين في كل مكان.",
        },
      ],
    },
    games: {
      title: "ألعابنا",
      subtitle: "استكشف العوالم التي صنعناها.",
      availableOn: "متوفرة على",
      comingSoon: "قادمة على Steam",
      game3: {
        title: "المملكة المتبقية",
        description:
          "لعبة روغ لايك خيالية مظلمة تدمج بناء الرزم والقتال بالبطاقات في الوقت الفعلي والدفاع عن الأبراج في تجربة واحدة قائمة على الجولات. اختر لوردًا ساقطًا وقاتل عبر عالم مدمر حيث كل فعل ومعركة وأثر وحدث يدفع بنيتك في اتجاه مختلف.",
      },
      game1: {
        title: "ما تبقّى منها",
        description:
          "لعبة رعب غامضة مبنية على القصة، يصل فيها خالد إلى قرية نائية يطاردها شبح أسطورة عن شيطان يمكنه اتخاذ هيئة بشرية والتغذي على المشاعر الإنسانية. عندما يتهم القرويون فتاة صغيرة بأنها المخلوق، على خالد أن يكشف الحقيقة قبل أن يحصد الخوف والشك ضحية أخرى.",
      },
      game2: {
        title: "لصّان",
        description:
          "لعبة منصات تنافسية محلية سريعة ثنائية الأبعاد تدور تحت سماء ليالٍ عربية من الأطلال العائمة والظلال المضاءة بالقمر والبوابات المسحورة. يتبادل لاعبان الأدوار باستمرار بين العدّاء والصيّاد في معركة سيطرة وضغط.",
      },
    },
    gallery: {
      title: "الحياة في الاستوديو",
      subtitle: "خلف الكواليس — حيث يحدث السحر.",
    },
    twitter: {
      title: "آخر الأخبار",
      subtitle: "تابع رحلتنا وابقَ على اطلاع.",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحب أن نسمع منك. أرسل لنا رسالة أو تابعنا.",
      email: "info@pixelat.sa",
      location: "الرياض، المملكة العربية السعودية",
      newsletter: "ابقَ على اطلاع",
      newsletterSub: "احصل على آخر أخبار مشاريعنا والاستوديو.",
      placeholder: "بريدك@الإلكتروني.com",
      subscribe: "اشترك",
      copyright: "© ٢٠٢٦ بيكسلات قيمز. جميع الحقوق محفوظة.",
    },
  },
};
