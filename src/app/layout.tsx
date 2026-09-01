import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { AnimationProvider } from "@/components/site/animation-provider";
import { StartupAnimation } from "@/components/site/startup-animation";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "FKSola Financial",
    template: "%s | FKSola Financial",
  },
  description:
    "Education-first financial guidance for individuals and families preparing for a more confident future.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <StartupAnimation />
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
