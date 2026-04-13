import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { AppContextProvider } from "@/contexts/app";
import { Metadata } from "next";
import { NextAuthSessionProvider } from "@/auth/session";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme";
import { getSiteUrl } from "@/lib/site-url";
import {
  BLOODHOUNDS_METADATA,
  BLOODHOUNDS_OG_IMAGE,
  BLOODHOUNDS_SITE_NAME,
} from "@/lib/bloodhounds-site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${BLOODHOUNDS_SITE_NAME}`,
      default: BLOODHOUNDS_METADATA.title,
    },
    description: BLOODHOUNDS_METADATA.description,
    keywords: BLOODHOUNDS_METADATA.keywords.join(", "),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      siteName: BLOODHOUNDS_SITE_NAME,
      title: BLOODHOUNDS_METADATA.title,
      description: BLOODHOUNDS_METADATA.description,
      images: [
        {
          url: BLOODHOUNDS_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Bloodhounds Homes editorial poster",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <NextAuthSessionProvider>
        <AppContextProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppContextProvider>
      </NextAuthSessionProvider>
    </NextIntlClientProvider>
  );
}
