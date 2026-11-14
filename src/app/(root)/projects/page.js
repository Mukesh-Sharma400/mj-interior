import { ProjectsContent } from "./ProjectsContent";

export const metadata = {
  title: "Projects",
  description:
    "Residential and commercial interior projects completed by MJ Interior across Mumbai and Navi Mumbai.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsContent />;
}
