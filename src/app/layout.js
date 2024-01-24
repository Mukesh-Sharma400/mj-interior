import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "MJ Interior",
  description:
    "MJ Interior is a crew of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
  keywords:
    "interior design, creative spaces, home decor, aesthetic designs, innovative interiors",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://mj-interior.vercel.app",
  type: "website",
  ogTitle: "MJ Interior",
  ogDescription:
    "MJ Interior is a crew of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
  ogImage: "./icon.png",
  twitterTitle: "MJ Interior",
  twitterDescription:
    "MJ Interior is a crew of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
