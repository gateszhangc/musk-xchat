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
  MUSK_XCHAT_METADATA,
  MUSK_XCHAT_OG_IMAGE,
  MUSK_XCHAT_SITE_NAME,
} from "@/lib/musk-xchat-site";

const readRuntimeEnv = (key: string) => process.env[key]?.trim() || "";

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
      template: `%s | ${MUSK_XCHAT_SITE_NAME}`,
      default: MUSK_XCHAT_METADATA.title,
    },
    description: MUSK_XCHAT_METADATA.description,
    keywords: MUSK_XCHAT_METADATA.keywords.join(", "),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      siteName: MUSK_XCHAT_SITE_NAME,
      title: MUSK_XCHAT_METADATA.title,
      description: MUSK_XCHAT_METADATA.description,
      images: [
        {
          url: MUSK_XCHAT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Musk XChat editorial poster",
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
  const analyticsConfig = {
    googleAnalyticsId: readRuntimeEnv("NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"),
    clarityId: readRuntimeEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID"),
    logRocketAppId: readRuntimeEnv("NEXT_PUBLIC_LOGROCKET_APP_ID"),
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <NextAuthSessionProvider>
        <AppContextProvider>
          <ThemeProvider analyticsConfig={analyticsConfig}>
            {children}
          </ThemeProvider>
        </AppContextProvider>
      </NextAuthSessionProvider>
    </NextIntlClientProvider>
  );
}
