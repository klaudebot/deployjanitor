import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            {title}
          </h1>
          <p className="text-sm text-text-muted mb-10">
            Last updated: {lastUpdated}
          </p>
          <div className="legal-prose">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
