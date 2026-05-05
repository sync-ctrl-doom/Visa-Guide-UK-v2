import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { LanguageModal } from "@/components/LanguageModal";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { FloatingDarkModeToggle } from "@/components/FloatingDarkModeToggle";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LanguageModal />
      <DisclaimerBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingDarkModeToggle />
    </div>
  );
}
