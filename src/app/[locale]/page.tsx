import BloodhoundsLanding from "@/components/landing/bloodhounds-landing";
import { getSiteUrl } from "@/lib/site-url";
import {
  BLOODHOUNDS_METADATA,
  BLOODHOUNDS_OG_IMAGE,
  BLOODHOUNDS_SITE_NAME,
  buildBloodhoundsStructuredData,
} from "@/lib/bloodhounds-site";
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
    title: BLOODHOUNDS_METADATA.title,
    description: BLOODHOUNDS_METADATA.description,
    keywords: BLOODHOUNDS_METADATA.keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: BLOODHOUNDS_METADATA.title,
      description: BLOODHOUNDS_METADATA.description,
      siteName: BLOODHOUNDS_SITE_NAME,
      images: [
        {
          url: `${siteUrl}${BLOODHOUNDS_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: "Bloodhounds Homes editorial poster",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: BLOODHOUNDS_METADATA.title,
      description: BLOODHOUNDS_METADATA.description,
      images: [`${siteUrl}${BLOODHOUNDS_OG_IMAGE}`],
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
  const structuredData = buildBloodhoundsStructuredData(
    getAbsoluteLocalizedUrl(siteUrl, locale, "/")
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BloodhoundsLanding />
    </>
  );
}
