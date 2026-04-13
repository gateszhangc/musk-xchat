export const BLOODHOUNDS_DOMAIN = "bloodhounds.homes";
export const BLOODHOUNDS_SITE_NAME = "Bloodhounds Homes";
export const BLOODHOUNDS_NETFLIX_URL =
  "https://www.netflix.com/hk-en/title/81444051";
export const BLOODHOUNDS_IMDB_URL = "https://www.imdb.com/title/tt26315487/";
export const BLOODHOUNDS_OG_IMAGE = "/brand/bloodhounds/bloodhounds-og.png";

export const BLOODHOUNDS_METADATA = {
  title:
    "Bloodhounds Netflix Guide: Cast, Episodes, Season 2, and Where to Watch",
  description:
    "An unofficial Bloodhounds guide built from the current Netflix and IMDb listings, covering the cast, episode guide, season status, and why this boxing-crime K-drama lands so hard.",
  keywords: [
    "bloodhounds netflix",
    "bloodhounds cast",
    "bloodhounds episodes",
    "bloodhounds season 2",
    "bloodhounds imdb",
    "bloodhounds kdrama",
    "bloodhounds where to watch",
  ],
} as const;

export const bloodhoundsStats = [
  {
    label: "Seasons on Netflix",
    value: "2",
    note: "Verified from the Netflix title page on April 14, 2026.",
  },
  {
    label: "Episodes on IMDb",
    value: "15",
    note: "Current IMDb listing for title tt26315487.",
  },
  {
    label: "Core mix",
    value: "Boxing x Crime",
    note: "Action, crime pressure, and hard-earned brotherhood.",
  },
] as const;

export const bloodhoundsSourceFacts = [
  {
    label: "Official summary",
    value:
      "Two young boxers join forces against violent loan-shark power to protect the people they love.",
  },
  {
    label: "Starring",
    value: "Woo Do-hwan, Lee Sang-yi, Jung Ji-hoon",
  },
  {
    label: "Creator",
    value: "Jason Kim",
  },
  {
    label: "Genres on Netflix",
    value:
      "TV Dramas, Korean, TV Action & Adventure, Crime TV Shows, Boxing, K-Dramas based on Webtoon, Sports, TV Thrillers",
  },
] as const;

export const bloodhoundsAngles = [
  {
    title: "Debt as the engine",
    copy:
      "Bloodhounds moves fast because every punch lands inside a debt trap. The show keeps the stakes personal, then turns that pressure into a street-level war.",
  },
  {
    title: "Brotherhood over swagger",
    copy:
      "The series works because the central bond never feels ornamental. The chemistry between the two leads gives the violence weight and the victories relief.",
  },
  {
    title: "Fights with consequence",
    copy:
      "The boxing DNA shapes the whole mood: footwork, discipline, body damage, and a sense that each move costs something real.",
  },
] as const;

export const bloodhoundsCastHighlights = [
  {
    name: "Woo Do-hwan",
    role: "Lead presence",
    note:
      "Brings a disciplined stillness that makes the emotional swings and the fight beats hit harder.",
  },
  {
    name: "Lee Sang-yi",
    role: "Counterweight",
    note:
      "Adds bounce, nerve, and a lighter surface that keeps the series from collapsing into grim monotone.",
  },
  {
    name: "Jung Ji-hoon",
    role: "Season-two pressure",
    note:
      "His billing on the current Netflix page signals a broader battlefield and a bigger energy source for the newer run.",
  },
  {
    name: "Jason Kim",
    role: "Creator",
    note:
      "Keeps the show locked on velocity, loyalty, and the collision between clean intent and dirty money.",
  },
] as const;

export const bloodhoundsImagePanels = [
  {
    src: "/brand/bloodhounds/bloodhounds-hero.svg",
    alt: "Bloodhounds-inspired night boxing poster art",
    title: "Steel discipline",
    caption: "A cold city, a ring-trained body, and a promise that violence will cost everybody.",
  },
  {
    src: "/brand/bloodhounds/bloodhounds-brotherhood.svg",
    alt: "Bloodhounds-inspired duo portrait art",
    title: "Two-man center",
    caption: "The friendship keeps the series upright even when the debt machine tries to grind everything down.",
  },
  {
    src: "/brand/bloodhounds/bloodhounds-ledger.svg",
    alt: "Bloodhounds-inspired debt ledger poster art",
    title: "Numbers with bruises",
    caption: "Loan-book logic, surveillance, and late-night routes through Seoul become part of the show's texture.",
  },
] as const;

export const bloodhoundsEpisodes = [
  {
    episode: "Episode 1",
    runtime: "1h 1m",
    summary:
      "After a tense boxing match, Gun-woo meets Woo-jin while the series lays out the ruthless business playbook behind Myeong-gil's rise.",
  },
  {
    episode: "Episode 2",
    runtime: "1h 3m",
    summary:
      "Gun-woo looks for a way out of his mother's debt as power, humiliation, and revenge start tightening the net around everyone.",
  },
  {
    episode: "Episode 3",
    runtime: "58m",
    summary:
      "The pair begins mapping how to break the scam ring while Myeong-gil keeps pushing for control from a stronger position.",
  },
  {
    episode: "Episode 4",
    runtime: "54m",
    summary:
      "Plans start aligning, then nearly collapse, as President Choi's operation runs straight into organized resistance.",
  },
  {
    episode: "Episode 5",
    runtime: "55m",
    summary:
      "Training, regrouping, and information warfare take over as the crew prepares for a larger collision.",
  },
  {
    episode: "Episode 6",
    runtime: "58m",
    summary:
      "A brief lift gives way to renewed danger when exposed players move against President Choi and his guards.",
  },
  {
    episode: "Episode 7",
    runtime: "1h 1m",
    summary:
      "After a brutal setback, vengeance becomes the new engine and the alliance map changes in a meaningful way.",
  },
  {
    episode: "Episode 8",
    runtime: "1h 14m",
    summary:
      "Duty to loved ones pushes the duo into the final drive to bring Myeong-gil down for good.",
  },
] as const;

export const bloodhoundsFaqs = [
  {
    question: "Where can you watch Bloodhounds?",
    answer:
      "Netflix is the primary streaming home. This guide links directly to the current Netflix title page and uses that listing as its watch reference.",
  },
  {
    question: "How many seasons does Bloodhounds have right now?",
    answer:
      "The current Netflix title page lists 2 seasons. This site was updated against that page on April 14, 2026.",
  },
  {
    question: "Who is highlighted on the official listings?",
    answer:
      "Netflix currently highlights Woo Do-hwan, Lee Sang-yi, and Jung Ji-hoon, with Jason Kim credited as creator.",
  },
  {
    question: "What makes Bloodhounds stand out from other crime K-dramas?",
    answer:
      "Its hook is the way boxing discipline, debt pressure, and genuine male friendship keep feeding into one another instead of feeling like separate genre parts.",
  },
] as const;

export const bloodhoundsFooterNote =
  "Unofficial fan guide built from the current Netflix title page and IMDb listing on April 14, 2026. Not affiliated with Netflix or IMDb.";

export function buildBloodhoundsStructuredData(siteUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: BLOODHOUNDS_SITE_NAME,
      url: siteUrl,
      description: BLOODHOUNDS_METADATA.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "TVSeries",
      name: "Bloodhounds",
      description: BLOODHOUNDS_METADATA.description,
      genre: ["Action", "Crime", "Boxing", "Thriller"],
      numberOfSeasons: 2,
      numberOfEpisodes: 15,
      actor: [
        { "@type": "Person", name: "Woo Do-hwan" },
        { "@type": "Person", name: "Lee Sang-yi" },
        { "@type": "Person", name: "Jung Ji-hoon" },
      ],
      creator: {
        "@type": "Person",
        name: "Jason Kim",
      },
      sameAs: [BLOODHOUNDS_NETFLIX_URL, BLOODHOUNDS_IMDB_URL],
      url: siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: bloodhoundsFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
