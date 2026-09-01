import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: { absolute: "Heek-E | Make your brand unmissable" },
  description:
    "Independent marketing partner. Strategy, creative, and distribution that help ambitious brands get noticed and remembered.",
};

export default function HomePage() {
  return <HomeExperience />;
}
