import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import { Providers } from "./providers";
import { business } from "@/app/data/site";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = business.siteUrl;
const siteTitle = business.name;
const siteDescription = business.description;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "interior design",
    "interior designer Navi Mumbai",
    "interior renovation",
    "modular kitchen",
    "POP work",
    "turnkey contractor",
    "Koparkhairne",
    "Ghansoli",
    "home decor",
  ],
  authors: [{ name: "Mukesh Sharma", url: "https://mukesh-sharma.vercel.app" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "MJ Interior interior design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
