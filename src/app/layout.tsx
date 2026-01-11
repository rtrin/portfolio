import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richard Trinh | Software Engineer",
  description: "CS student at Colby College. Software engineer intern at HashiCorp, Garmin, and Netsmart. Building with Go, React, and distributed systems.",
  authors: [{ name: "Richard Trinh" }],
  creator: "Richard Trinh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Richard Trinh | Software Engineer",
    description: "CS student at Colby College. Software engineer intern at HashiCorp, Garmin, and Netsmart.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Trinh | Software Engineer",
    description: "CS student at Colby College. Software engineer intern at HashiCorp, Garmin, and Netsmart.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} antialiased bg-[#121212] text-white font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Richard Trinh",
              jobTitle: "Software Engineer",
              url: "https://github.com/rtrin",
              sameAs: [
                "https://github.com/rtrin",
                "https://linkedin.com/in/rtrin",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
