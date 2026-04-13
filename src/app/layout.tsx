import "@/app/globals.css";

import { getLocale, setRequestLocale } from "next-intl/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const googleAdsenseCode = process.env.NEXT_PUBLIC_GOOGLE_ADCODE || "";
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {googleAdsenseCode && (
          <meta name="google-adsense-account" content={googleAdsenseCode} />
        )}

        {analyticsId && (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        )}
        {clarityId && <link rel="dns-prefetch" href="https://clarity.ms" />}

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
