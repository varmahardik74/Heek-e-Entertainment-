import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your brand and where you want to go. Heek-E will respond with a thoughtful next step.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}