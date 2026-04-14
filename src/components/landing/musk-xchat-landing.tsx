import Image from "next/image";
import Link from "next/link";
import {
  Chakra_Petch,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MUSK_XCHAT_FOOTER_NOTE,
  MUSK_XCHAT_SITE_NAME,
  muskXChatCapabilitySignals,
  muskXChatChips,
  muskXChatComparisonRows,
  muskXChatFaqs,
  muskXChatImagePanels,
  muskXChatNav,
  muskXChatOverview,
  muskXChatQuickFacts,
  muskXChatTimeline,
} from "@/lib/musk-xchat-site";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function MuskXChatLanding() {
  return (
    <main className={`${sans.className} bg-[#060606] text-[#f5f4ee]`}>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/brand/musk-xchat/musk-xchat-hero.png"
          alt="Abstract hero artwork for Musk XChat"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.26)_0%,rgba(6,6,6,0.74)_52%,rgba(6,6,6,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(130,255,182,0.9),rgba(255,88,83,0.75),transparent)]" />

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-between px-5 pb-10 pt-6 sm:px-8 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/en"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-white/88"
            >
              <Image
                src="/brand/musk-xchat/musk-xchat-mark.svg"
                alt="Musk XChat mark"
                width={38}
                height={38}
                className="rounded-md border border-white/12"
              />
              <span className={display.className}>{MUSK_XCHAT_SITE_NAME}</span>
            </Link>

            <nav className={`${mono.className} flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-white/70 sm:text-xs`}>
              {muskXChatNav.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-[#82ffb6]">
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="max-w-5xl py-16 sm:py-20 lg:py-28">
            <p className={`${mono.className} text-xs uppercase tracking-[0.34em] text-[#82ffb6] sm:text-sm`}>
              Independent xChat explainer
            </p>
            <h1
              className={`${display.className} mt-4 max-w-5xl text-[3.9rem] uppercase leading-[0.88] text-[#f8f7f1] sm:text-[5.6rem] lg:text-[7.6rem]`}
            >
              Musk XChat
            </h1>
            <p className="mt-5 max-w-3xl text-balance text-lg leading-8 text-white/82 sm:text-2xl sm:leading-9">
              What xChat is, what public reporting has actually established, and how
              it compares with WhatsApp, Telegram, and Signal.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              This page is built for people searching{" "}
              <strong className="font-semibold text-white">Musk xChat</strong>,{" "}
              <strong className="font-semibold text-white">xChat</strong>, or{" "}
              <strong className="font-semibold text-white">X Chat</strong> and
              trying to separate product ambition from product reality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#82ffb6] px-5 text-sm font-semibold text-[#05100a] transition hover:bg-[#98ffc1]"
              >
                What Is xChat
              </a>
              <a
                href="#compare"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/16 bg-black/28 px-5 text-sm font-semibold text-white transition hover:border-[#82ffb6] hover:text-[#82ffb6]"
              >
                Compare Apps
              </a>
              <a
                href="#faq"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#ff5853]/40 bg-[#251111] px-5 text-sm font-semibold text-[#ffd8d6] transition hover:bg-[#321514]"
              >
                Read FAQ
              </a>
            </div>

            <div className={`${mono.className} mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-white/72 sm:text-xs`}>
              {muskXChatChips.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/12 bg-black/30 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {muskXChatQuickFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-md border border-white/12 bg-black/36 px-4 py-4 backdrop-blur-[2px]"
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-white/56`}>
                  {fact.label}
                </p>
                <p className={`${display.className} mt-3 text-3xl uppercase leading-none text-[#f7f5ef] sm:text-4xl`}>
                  {fact.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {fact.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="overview" className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-12 lg:py-20">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#82ffb6]`}>
              Overview
            </p>
            <h2
              className={`${display.className} mt-4 max-w-4xl text-4xl uppercase leading-tight text-[#f8f7f1] sm:text-5xl`}
            >
              The real xChat question is whether X is building a messenger or an
              everything-app wedge.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              The keyword is hot because xChat sits between product categories. It
              is not just another DM refresh, but it is also not yet a settled
              universal messenger with the clarity people expect from WhatsApp,
              Telegram, or Signal.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {muskXChatOverview.map((item) => (
                <article key={item.title} className="border-t border-[#82ffb6]/45 pt-4">
                  <h3 className="text-lg font-semibold text-[#f4f2eb]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {muskXChatCapabilitySignals.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-white/10 bg-[#101010] px-4 py-4"
                >
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#ff8b87]`}>
                    Signal
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <figure className="overflow-hidden rounded-md border border-white/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/brand/musk-xchat/musk-xchat-network.png"
                  alt="Abstract network art for Musk XChat overview"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                />
              </div>
            </figure>
            <div className="rounded-md border border-white/10 bg-[#101010] px-4 py-4">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#82ffb6]`}>
                Reading rule
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Read xChat as an evolving messaging product with strong public
                momentum, not as a finished trust guarantee. That framing keeps the
                keyword useful even as rollout language shifts.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="compare" className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#82ffb6]`}>
                Compare
              </p>
              <h2
                className={`${display.className} mt-4 max-w-4xl text-4xl uppercase leading-tight text-[#f8f7f1] sm:text-5xl`}
              >
                xChat makes sense as an X-native layer before it makes sense as a
                full WhatsApp replacement.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              This table is deliberately qualitative. It is meant to orient search
              intent fast, not pretend that xChat already matches the maturity or
              trust profile of older messaging products.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-md border border-white/10">
            <table className="min-w-full border-collapse bg-[#0f0f0f] text-left">
              <thead className={`${mono.className} text-[11px] uppercase tracking-[0.18em] text-white/64`}>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 font-medium">Topic</th>
                  <th className="px-4 py-4 font-medium text-[#82ffb6]">xChat</th>
                  <th className="px-4 py-4 font-medium">Telegram</th>
                  <th className="px-4 py-4 font-medium">WhatsApp</th>
                  <th className="px-4 py-4 font-medium">Signal</th>
                </tr>
              </thead>
              <tbody>
                {muskXChatComparisonRows.map((row) => (
                  <tr key={row.topic} className="border-b border-white/8 align-top last:border-b-0">
                    <th className="px-4 py-4 text-sm font-semibold text-white">
                      {row.topic}
                    </th>
                    <td className="px-4 py-4 text-sm leading-7 text-white/80">
                      {row.xchat}
                    </td>
                    <td className="px-4 py-4 text-sm leading-7 text-white/68">
                      {row.telegram}
                    </td>
                    <td className="px-4 py-4 text-sm leading-7 text-white/68">
                      {row.whatsapp}
                    </td>
                    <td className="px-4 py-4 text-sm leading-7 text-white/68">
                      {row.signal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="timeline" className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#82ffb6]`}>
                Timeline
              </p>
              <h2
                className={`${display.className} mt-4 max-w-4xl text-4xl uppercase leading-tight text-[#f8f7f1] sm:text-5xl`}
              >
                The 2025 reporting arc explains why xChat search demand kept
                compounding.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              Concrete dates matter here because xChat has been framed as both a
              rollout story and a trust story. Those are related, but they are not
              the same thing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="space-y-4">
              {muskXChatTimeline.map((item) => (
                <article
                  key={item.date}
                  className="rounded-md border border-white/10 bg-[#101010] px-4 py-4"
                >
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#ff8b87]`}>
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {muskXChatImagePanels.map((panel) => (
                <figure
                  key={panel.src}
                  className="overflow-hidden rounded-md border border-white/10 bg-[#101010]"
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={panel.src}
                      alt={panel.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                  </div>
                  <figcaption className="px-4 py-4">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#82ffb6]`}>
                      {panel.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {panel.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#060606]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#82ffb6]`}>
                FAQ
              </p>
              <h2
                className={`${display.className} mt-4 max-w-xl text-4xl uppercase leading-tight text-[#f8f7f1] sm:text-5xl`}
              >
                Use this page to orient the keyword, not to outsource your trust.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                xChat is interesting precisely because it sits between product
                speculation, public rollout language, and real messaging
                competition. That makes precision more useful than hype.
              </p>
              <p className="mt-8 rounded-md border border-[#ff5853]/28 bg-[#180d0d] px-4 py-4 text-sm leading-7 text-[#ffd9d7]">
                {MUSK_XCHAT_FOOTER_NOTE}
              </p>
            </div>

            <div className="rounded-md border border-white/10 bg-[#101010] px-5 py-2">
              <Accordion type="single" collapsible>
                {muskXChatFaqs.map((item) => (
                  <AccordionItem key={item.question} value={item.question} className="border-white/10">
                    <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline">
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
        </div>
      </section>
    </main>
  );
}
