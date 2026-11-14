import { GalleryContent } from "./GalleryContent";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of living rooms, bedrooms, kitchens, bathrooms and offices designed and built by MJ Interior.",
  alternates: { canonical: "/gallery" },
};

export default function Page() {
  return <GalleryContent />;
}
