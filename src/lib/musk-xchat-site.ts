export const MUSK_XCHAT_DOMAIN = "musk-xchat.lol";
export const MUSK_XCHAT_SITE_NAME = "Musk XChat";
export const MUSK_XCHAT_UPDATED_AT = "2026-04-14";
export const MUSK_XCHAT_OG_IMAGE = "/brand/musk-xchat/musk-xchat-og.png";

export const MUSK_XCHAT_METADATA = {
  title: "Musk XChat: What xChat Is, Reported Features, Rollout, and Alternatives",
  description:
    "Independent guide to Musk xChat and XChat: what public reporting says, which features are associated with it, where rollout stood in 2025, and how it compares with WhatsApp, Telegram, and Signal.",
  keywords: [
    "musk xchat",
    "xchat",
    "x chat",
    "elon musk xchat",
    "xchat app",
    "x chat app",
    "xchat vs whatsapp",
    "xchat vs telegram",
    "xchat security",
    "x messaging app",
  ],
} as const;

export const muskXChatNav = [
  { label: "Overview", href: "#overview" },
  { label: "Compare", href: "#compare" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
] as const;

export const muskXChatChips = [
  "xChat",
  "X messaging",
  "audio + video calls",
  "file sharing",
  "vanishing mode",
  "no phone number pitch",
] as const;

export const muskXChatQuickFacts = [
  {
    label: "Keyword intent",
    value: "xChat inside X",
    note:
      "Searches for Musk xChat, xChat, and X Chat usually point to X's newer messaging layer rather than a fully independent mainstream app.",
  },
  {
    label: "Public rollout",
    value: "May-Sep 2025",
    note:
      "Public coverage tracked beta access, broader rollout language, and later expansion of the encrypted-chat push across concrete dates in 2025.",
  },
  {
    label: "Trust posture",
    value: "Still evolving",
    note:
      "Feature ambition moved faster than independent verification, so claims around encryption and security should be read cautiously.",
  },
] as const;

export const muskXChatOverview = [
  {
    title: "What people mean by Musk xChat",
    copy:
      "In search, Musk xChat is shorthand for X's upgraded chat layer: a heavier-weight replacement for classic DMs, not just a new chat bubble inside the old inbox.",
  },
  {
    title: "Why the keyword matters",
    copy:
      "People are trying to answer three questions quickly: is xChat live yet, which features actually shipped, and whether it is a credible WhatsApp or Telegram alternative.",
  },
  {
    title: "What public reporting established",
    copy:
      "Coverage tied xChat to vanishing messages, file sharing, audio and video calls, and a more ambitious architecture, while also flagging unresolved security questions.",
  },
] as const;

export const muskXChatCapabilitySignals = [
  {
    title: "X-native identity",
    copy:
      "The pitch is chat built around an X account, so the product narrative is closer to 'messaging inside the everything-app stack' than to phone-number-first messaging.",
  },
  {
    title: "Richer than legacy DMs",
    copy:
      "Public descriptions consistently frame xChat as a step beyond old X direct messages, especially around media sharing, calls, and session flow.",
  },
  {
    title: "Security language needs restraint",
    copy:
      "Because public claims and public scrutiny rose together, the safest way to read xChat today is as an evolving product with ambitious messaging rather than a settled privacy benchmark.",
  },
] as const;

export const muskXChatComparisonRows = [
  {
    topic: "Where it lives",
    xchat: "Inside X accounts and phased rollout logic",
    telegram: "Standalone app with channels, bots, and public identity layers",
    whatsapp: "Standalone app with phone-number centric onboarding",
    signal: "Standalone app with privacy-first positioning",
  },
  {
    topic: "Calling",
    xchat: "Reported audio and video calling support",
    telegram: "Mature voice and video calling stack",
    whatsapp: "Mainstream voice and video calling",
    signal: "Voice and video calling with simpler product surface",
  },
  {
    topic: "File flow",
    xchat: "Reported ability to share files inside X",
    telegram: "Strong file, channel, and forwarding workflows",
    whatsapp: "Reliable everyday media and document sharing",
    signal: "Private sharing with fewer growth mechanics",
  },
  {
    topic: "Disappearing behavior",
    xchat: "Reported vanishing-message mode",
    telegram: "Auto-delete and secret-chat style controls",
    whatsapp: "Disappearing messages in a mass-market UX",
    signal: "Disappearing messages are a core expectation",
  },
  {
    topic: "Default trust posture",
    xchat: "Read claims cautiously until independently validated",
    telegram: "Powerful but mixed trust model across chat types",
    whatsapp: "Convenient and broad, but not the strictest posture",
    signal: "Usually the strongest privacy default in this set",
  },
] as const;

export const muskXChatTimeline = [
  {
    date: "May 30, 2025",
    title: "xChat appears in beta",
    copy:
      "TechCrunch reported xChat rolling out in beta while X paused work on its older encrypted-DM feature, suggesting a deeper inbox rewrite was underway.",
  },
  {
    date: "June 2, 2025",
    title: "Broader rollout language arrives",
    copy:
      "Musk described xChat as rolling out with vanishing messages, file sharing, and calling support, which sharply raised attention around X as a messaging competitor.",
  },
  {
    date: "September 4, 2025",
    title: "Encrypted-chat rollout broadens again",
    copy:
      "Public reporting later described xChat reaching more users, reviving the same core question: how much of the experience should users trust as truly end-to-end secure?",
  },
] as const;

export const muskXChatImagePanels = [
  {
    src: "/brand/musk-xchat/musk-xchat-network.png",
    alt: "Abstract network map artwork for Musk XChat",
    title: "Signal graph",
    caption:
      "The product story is not just chat. It is X trying to turn identity, media, and messaging into one tighter loop.",
  },
  {
    src: "/brand/musk-xchat/musk-xchat-privacy.png",
    alt: "Abstract privacy caution artwork for Musk XChat",
    title: "Trust gap",
    caption:
      "Search demand is fueled by feature excitement and skepticism at the same time, especially around encryption claims.",
  },
  {
    src: "/brand/musk-xchat/musk-xchat-calls.png",
    alt: "Abstract calling artwork for Musk XChat",
    title: "Calls and files",
    caption:
      "What made xChat notable was the promise of something broader than text threads: files, calls, and a heavier chat architecture inside X.",
  },
] as const;

export const muskXChatFaqs = [
  {
    question: "What is Musk xChat?",
    answer:
      "Musk xChat is the search term many people use for X's newer chat product direction. It refers to xChat or XChat, an upgraded messaging layer described in public reporting around X.",
  },
  {
    question: "Is xChat a separate app from X?",
    answer:
      "The safest default is no. Public reporting described xChat primarily as a newer messaging layer inside X, even though later commentary has speculated about broader standalone ambitions.",
  },
  {
    question: "Can xChat replace WhatsApp or Telegram right now?",
    answer:
      "It is better read as an emerging alternative narrative than a settled replacement. WhatsApp, Telegram, and Signal still have clearer distribution, more mature product expectations, and better-understood trust models.",
  },
  {
    question: "Is xChat end-to-end encrypted?",
    answer:
      "Treat that as unresolved. Public coverage repeatedly paired xChat's encryption claims with skepticism, which means the product should not be presented as a fully verified privacy benchmark.",
  },
  {
    question: "Why does this page focus on dates and caveats?",
    answer:
      "Because xChat is a moving target. Concrete dates make the product story easier to evaluate, and caveats keep the page useful when rollout language outruns durable validation.",
  },
] as const;

export const MUSK_XCHAT_FOOTER_NOTE =
  "Independent keyword guide updated on April 14, 2026. Not affiliated with X Corp., xAI, or Elon Musk.";

export function buildMuskXChatStructuredData(siteUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: MUSK_XCHAT_SITE_NAME,
      url: siteUrl,
      description: MUSK_XCHAT_METADATA.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: MUSK_XCHAT_METADATA.title,
      url: siteUrl,
      dateModified: MUSK_XCHAT_UPDATED_AT,
      description: MUSK_XCHAT_METADATA.description,
      about: [
        "xChat",
        "Musk xChat",
        "X messaging",
        "xChat vs WhatsApp",
        "xChat vs Telegram",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: muskXChatFaqs.map((item) => ({
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
