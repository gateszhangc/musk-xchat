import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Sans, Newsreader } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BLOODHOUNDS_IMDB_URL,
  BLOODHOUNDS_NETFLIX_URL,
  BLOODHOUNDS_SITE_NAME,
  bloodhoundsAngles,
  bloodhoundsCastHighlights,
  bloodhoundsEpisodes,
  bloodhoundsFaqs,
  bloodhoundsFooterNote,
  bloodhoundsImagePanels,
  bloodhoundsSourceFacts,
  bloodhoundsStats,
} from "@/lib/bloodhounds-site";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function BloodhoundsLanding() {
  return (
    <main className={`${sans.className} bg-[#08090d] text-[#f3f4ee]`}>
      <section className="relative isolate min-h-[82vh] overflow-hidden border-b border-white/10">
        <Image
          src="/brand/bloodhounds/bloodhounds-hero.svg"
          alt="Bloodhounds-inspired cinematic poster art"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,8,0.28)_0%,rgba(4,5,8,0.7)_56%,rgba(4,5,8,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(159,232,112,0.9),transparent)]" />

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col justify-between px-5 pb-12 pt-6 sm:px-8 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/en"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-[#dbe0d7]"
            >
              <Image
                src="/brand/bloodhounds/bloodhounds-mark.svg"
                alt="Bloodhounds Homes mark"
                width={40}
                height={40}
                className="rounded-md border border-white/12"
              />
              <span>{BLOODHOUNDS_SITE_NAME}</span>
            </Link>

            <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.24em] text-white/72 sm:text-sm">
              <a href="#episodes" className="transition hover:text-[#9fe870]">
                Episodes
              </a>
              <a href="#cast" className="transition hover:text-[#9fe870]">
                Cast
              </a>
              <a href="#faq" className="transition hover:text-[#9fe870]">
                FAQ
              </a>
            </nav>
          </header>

          <div className="max-w-4xl pt-12 sm:pt-20">
            <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[#9fe870] sm:text-sm">
              Unofficial Netflix series guide
            </p>
            <h1
              className={`${display.className} max-w-5xl text-[4rem] uppercase leading-[0.88] text-[#f6f7f1] sm:text-[5.8rem] lg:text-[8rem]`}
            >
              Bloodhounds
            </h1>
            <p
              className={`${serif.className} mt-4 max-w-3xl text-balance text-xl leading-8 text-[#e5e7df] sm:text-2xl`}
            >
              A sharper guide to Netflix&apos;s debt-fueled boxing thriller: cast
              notes, episode beats, season status, and the exact pressure points
              that make the series hit.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-white/82 sm:text-xs">
              {["Action", "Crime", "Boxing", "Brotherhood", "K-Drama"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/18 bg-black/28 px-3 py-2"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={BLOODHOUNDS_NETFLIX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#9fe870] px-5 text-sm font-semibold text-[#081108] transition hover:bg-[#b0f489]"
              >
                Watch on Netflix
              </Link>
              <Link
                href={BLOODHOUNDS_IMDB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-black/28 px-5 text-sm font-semibold text-white transition hover:border-[#9fe870] hover:text-[#9fe870]"
              >
                View IMDb
              </Link>
              <a
                href="#episodes"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-[#8a2435] px-5 text-sm font-semibold text-white transition hover:bg-[#a32940]"
              >
                Jump to Episodes
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {bloodhoundsStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/12 bg-black/34 px-4 py-4 backdrop-blur-[3px]"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/62">
                  {stat.label}
                </p>
                <p className={`${display.className} mt-3 text-5xl leading-none`}>
                  {stat.value}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0e1015]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:px-12 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9fe870]">
              Why the show lands
            </p>
            <h2
              className={`${serif.className} mt-4 max-w-3xl text-4xl leading-tight text-[#f6f7f1] sm:text-5xl`}
            >
              Bloodhounds works because it never separates fists, money, and
              loyalty.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              The official summary on Netflix is lean, but it points straight at
              the engine: two young boxers confronting a violent debt system.
              Everything good about the series grows from that premise. It keeps
              the action grounded, makes the friendships matter, and gives every
              confrontation a human bill.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {bloodhoundsAngles.map((angle) => (
                <article
                  key={angle.title}
                  className="border-t border-[#9fe870]/50 pt-4"
                >
                  <h3 className="text-lg font-semibold text-[#f1f3ec]">
                    {angle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {angle.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-5 self-start">
            {bloodhoundsSourceFacts.map((fact) => (
              <div
                key={fact.label}
                className="border border-white/12 bg-[#12151b] px-4 py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/52">
                  {fact.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  {fact.value}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090b10]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#9fe870]">
                Visual notes
              </p>
              <h2
                className={`${serif.className} mt-4 text-3xl text-[#f6f7f1] sm:text-4xl`}
              >
                The show feels cold, bruised, and strangely clean.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/68">
              These original images are built for the site, not pulled from the
              show, but they follow the same pressure map: discipline, debt, and
              nighttime momentum.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {bloodhoundsImagePanels.map((panel) => (
              <figure key={panel.src} className="overflow-hidden border border-white/12">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <figcaption className="bg-[#0d1016] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#9fe870]">
                    {panel.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {panel.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="episodes" className="border-b border-white/10 bg-[#11151c]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#9fe870]">
                Season 1 guide
              </p>
              <h2
                className={`${serif.className} mt-4 text-3xl text-[#f6f7f1] sm:text-4xl`}
              >
                The first eight episodes move like a debt spiral with gloves on.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/68">
              Episode beats below are paraphrased from the official Netflix
              listing so the page stays readable while still mapping the full run.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {bloodhoundsEpisodes.map((item, index) => (
              <article
                key={item.episode}
                className="grid gap-4 bg-[#0b0d12] px-4 py-5 md:grid-cols-[84px_minmax(0,1fr)_120px] md:items-start md:px-6"
              >
                <p className={`${display.className} text-4xl leading-none text-[#9fe870]`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-[#f4f5ef]">
                    {item.episode}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-white/72">
                    {item.summary}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/52 md:text-right">
                  {item.runtime}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border border-[#9fe870]/28 bg-[#0a1208] px-5 py-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#9fe870]">
              Season 2 status
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/78">
              Netflix currently lists a second season and surfaces both a teaser
              and a trailer. IMDb currently lists 15 episodes in total for the
              title, which is why this guide treats the series as an active,
              expanded run rather than a one-season curiosity.
            </p>
          </div>
        </div>
      </section>

      <section id="cast" className="border-b border-white/10 bg-[#090b10]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9fe870]">
            Cast focus
          </p>
          <h2
            className={`${serif.className} mt-4 max-w-3xl text-3xl text-[#f6f7f1] sm:text-4xl`}
          >
            The appeal starts with who carries the frame.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {bloodhoundsCastHighlights.map((person) => (
              <article
                key={person.name}
                className="border border-white/12 bg-[#10141c] px-4 py-5"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#9fe870]">
                  {person.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#f3f4ef]">
                  {person.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {person.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#10131a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-12 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9fe870]">
              FAQ
            </p>
            <h2
              className={`${serif.className} mt-4 text-3xl text-[#f6f7f1] sm:text-4xl`}
            >
              Enough context to decide whether Bloodhounds is your next watch.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
              This page is built for searchers who want more than a one-line
              summary but less than a spoiler essay. If you already know you are
              in, jump straight to the official pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={BLOODHOUNDS_NETFLIX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8a2435] px-5 text-sm font-semibold text-white transition hover:bg-[#a32940]"
              >
                Open Netflix
              </Link>
              <Link
                href={BLOODHOUNDS_IMDB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-[#9fe870] hover:text-[#9fe870]"
              >
                Open IMDb
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-[#090b10] px-4 py-2 sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {bloodhoundsFaqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index + 1}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#f3f4ee]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-white/72">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#08090d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-white/56 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>{bloodhoundsFooterNote}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={BLOODHOUNDS_NETFLIX_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#9fe870]"
            >
              Netflix
            </Link>
            <Link
              href={BLOODHOUNDS_IMDB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#9fe870]"
            >
              IMDb
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
