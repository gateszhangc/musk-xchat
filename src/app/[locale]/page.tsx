import MuskXChatLanding from "@/components/landing/musk-xchat-landing";
import { getSiteUrl } from "@/lib/site-url";
import {
  MUSK_XCHAT_METADATA,
  MUSK_XCHAT_OG_IMAGE,
  MUSK_XCHAT_SITE_NAME,
  buildMuskXChatStructuredData,
} from "@/lib/musk-xchat-site";
import {
  buildAlternateLanguageUrls,
  getAbsoluteLocalizedUrl,
} from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const canonicalUrl = getAbsoluteLocalizedUrl(siteUrl, locale, "/");
  const languages = buildAlternateLanguageUrls(siteUrl, "/");

  return {
    title: MUSK_XCHAT_METADATA.title,
    description: MUSK_XCHAT_METADATA.description,
    keywords: MUSK_XCHAT_METADATA.keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: MUSK_XCHAT_METADATA.title,
      description: MUSK_XCHAT_METADATA.description,
      siteName: MUSK_XCHAT_SITE_NAME,
      images: [
        {
          url: `${siteUrl}${MUSK_XCHAT_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: "Musk XChat editorial poster",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: MUSK_XCHAT_METADATA.title,
      description: MUSK_XCHAT_METADATA.description,
      images: [`${siteUrl}${MUSK_XCHAT_OG_IMAGE}`],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const structuredData = buildMuskXChatStructuredData(
    getAbsoluteLocalizedUrl(siteUrl, locale, "/")
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MuskXChatLanding />
    </>
  );
}
