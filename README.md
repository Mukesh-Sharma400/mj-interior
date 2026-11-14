# MJ Interior

Website for **MJ Interior**, an interior design and renovation company in Navi Mumbai, established in 2007.

**Live site:** [mjinterior.co.in](https://www.mjinterior.co.in)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) with React 18
- [styled-components](https://styled-components.com/) and Bootstrap 5 / Bootstrap Icons
- [EmailJS](https://www.emailjs.com/) for the contact form
- AOS (scroll animations), react-slick (services carousel), react-countup, react-responsive-masonry (gallery and testimonials)
- Deployed on [Vercel](https://vercel.com/) with Vercel Analytics

## Getting Started

**Requirements:** Node.js 24.x (see `engines` in `package.json`).

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the development server                 |
| `npm run build`        | Create a production build (also runs ESLint) |
| `npm start`            | Serve the production build                   |
| `npm run lint`         | Run ESLint                                   |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check formatting without changing files      |

## Environment Variables

The contact form sends email through EmailJS. Set these in `.env.local` locally and in **Vercel → Project → Settings → Environment Variables** for deployments:

| Variable                          | Description         |
| --------------------------------- | ------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service ID  |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key  |

These values are visible in the browser by design. Restrict the allowed domains in the EmailJS dashboard to prevent misuse.

## Project Structure

```
public/assets/          Images (WebP)
src/app/
├── (root)/             Pages: home, services, projects, gallery, about-us, contact-us (each page.js sets metadata; *Content.js holds the UI)
├── components/         Header, side menu, footer, contact form + popup, toast, tooltips
├── sections/           Home page sections (hero, counters, about, services, gallery, testimonials)
├── data/               site.js (business details, navigation, services, stats), projects.js, gallery.js, testimonials.js
├── colors.js           Colour and shadow tokens (theme.colors / theme.shadows)
├── layout.js           Root layout and site-wide SEO metadata
├── sitemap.js          Generates /sitemap.xml
└── robots.js           Generates /robots.txt
```

### Updating content

Content lives in **`src/app/data/`**:

- `site.js`: phone, email, address, social links, navigation, the list of services and the homepage counters
- `projects.js`: residential and commercial projects (sorted by amount automatically)
- `gallery.js`: gallery photos and their alt text, plus the five shown on the home page
- `testimonials.js`: client reviews

Edit them there and every page that uses them updates. Add new photos to `public/assets/` as WebP.

## Credits

Designed and developed by [Mukesh Sharma](https://mukesh-sharma.vercel.app).
