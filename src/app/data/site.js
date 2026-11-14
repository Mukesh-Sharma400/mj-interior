// Single source of truth for business details, navigation, services and stats.
// Edit values here and every page/section that uses them updates together.

import interiorDesignImage from "#/interior-design.webp";
import civilWorkImage from "#/civil-work.webp";
import tilingFlooringImage from "#/tiling-flooring.webp";
import electricalWorkImage from "#/electrical-work.webp";
import fabricationWorkImage from "#/fabrication-work.webp";
import paintingWorkImage from "#/painting-work.webp";
import popWorkImage from "#/pop-work.webp";
import carpenterWorkImage from "#/carpenter-work.webp";
import modularKitchenImage from "#/modular-kitchen.webp";
import turnkeyContractorImage from "#/turnkey-contractor.webp";

export const business = {
  name: "MJ Interior",
  founder: "Kuwar Chand Sharma",
  foundedYear: 2007,
  phone: "+918097775115",
  phoneDisplay: "(+91) 809-777-5115",
  email: "mjinteriors2007@gmail.com",
  address:
    "Plot No.32, Ground Floor, Near Dhanwantari Clinic, Sector - 5, Koparkhairne, Navi Mumbai - 400709.",
  siteUrl: "https://www.mjinterior.co.in",
  description:
    "MJ Interior is a company of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
  footerDescription:
    "Established in 2007, MJ Interior has firmly established itself as a leading and esteemed provider of interior renovation services, specializing in all types of interior decoration work in Ghansoli, Navi Mumbai and more.",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address,
)}`;

// Homepage counters. Update these as the business grows.
export const stats = {
  projects: 100,
  reviews: 30,
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact-us", label: "Contact Us" },
];

export const socialLinks = [
  {
    className: "bi bi-whatsapp",
    href: `https://wa.me/${business.phone}`,
    label: "WhatsApp",
  },
  {
    className: "bi bi-instagram",
    href: "https://www.instagram.com/_mjinteriors",
    label: "Instagram",
  },
  {
    className: "bi bi-facebook",
    href: "https://www.facebook.com/profile.php?id=61556937652865",
    label: "Facebook",
  },
  {
    className: "bi bi-threads",
    href: "https://www.threads.net/@_mjinteriors",
    label: "Threads",
  },
];

export const services = [
  {
    name: "Interior Designing",
    image: interiorDesignImage,
    description:
      "Transform your space with our expert interior designing services. From concept to completion, we'll bring your vision to life.",
  },
  {
    name: "Civil Work",
    image: civilWorkImage,
    description:
      "From building foundations to structural frameworks, we ensure that every project is completed to the highest standards.",
  },
  {
    name: "Tiling & Flooring",
    image: tilingFlooringImage,
    description:
      "Enhance your space with our tiling and flooring solutions. Our experts will help you choose and install the perfect materials.",
  },
  {
    name: "Electrical Work",
    image: electricalWorkImage,
    description:
      "Ensure the safety and functionality of your electrical systems with our professional services.",
  },
  {
    name: "Fabrication Work",
    image: fabricationWorkImage,
    description:
      "Get custom metal parts or structural components with our fabrication work services, delivered on time and within budget.",
  },
  {
    name: "Painting Work",
    image: paintingWorkImage,
    description:
      "Refresh your walls or give your exterior a makeover with our professional painting services.",
  },
  {
    name: "POP Work",
    image: popWorkImage,
    description:
      "Achieve stunning architectural details with our POP (Plaster of Paris) work services.",
  },
  {
    name: "Carpenter Work",
    image: carpenterWorkImage,
    description:
      "From furniture making to cabinetry, our skilled carpenters will bring your woodworking projects to life.",
  },
  {
    name: "Modular Kitchen",
    image: modularKitchenImage,
    description:
      "Experience the convenience and functionality of a modular kitchen tailored to suit your lifestyle.",
  },
  {
    name: "Turnkey Contractor",
    image: turnkeyContractorImage,
    description:
      "Sit back and relax while we manage every aspect of your project as your turnkey contractor.",
  },
];
