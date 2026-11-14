import { AboutUsContent } from "./AboutUsContent";

export const metadata = {
  title: "About Us",
  description:
    "Meet Kuwar Chand Sharma and the MJ Interior team, creating interiors in Navi Mumbai since 2007.",
  alternates: { canonical: "/about-us" },
};

export default function Page() {
  return <AboutUsContent />;
}
