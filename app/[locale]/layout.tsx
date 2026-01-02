import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upwork Portfolio - Professional Freelancer",
  description: "Professional portfolio website for Upwork freelancers.",
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${manrope.variable} bg-background-dark text-slate-300 antialiased selection:bg-purple-500/30 selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
