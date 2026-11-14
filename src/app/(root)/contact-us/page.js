import { ContactUsContent } from "./ContactUsContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, email or visit MJ Interior in Koparkhairne, Navi Mumbai for a personalised interior design consultation.",
  alternates: { canonical: "/contact-us" },
};

export default function Page() {
  return <ContactUsContent />;
}
