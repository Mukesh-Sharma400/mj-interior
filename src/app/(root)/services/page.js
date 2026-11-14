import { ServicesContent } from "./ServicesContent";

export const metadata = {
  title: "Services",
  description:
    "Interior designing, civil work, tiling & flooring, electrical, fabrication, painting, POP, carpentry, modular kitchens and turnkey contracting in Navi Mumbai.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesContent />;
}
