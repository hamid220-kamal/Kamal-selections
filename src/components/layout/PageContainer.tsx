import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3EB] text-[#3E0A23]">
      <Navbar />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}
