import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import { WelcomeIntro } from "@/components/welcome-intro";
export const metadata: Metadata = {
  title: { default: "sosialkelompok — Cerita yang Menggerakkan", template: "%s | sosialkelompok" },
  description: "Ruang untuk mengenal isu sosial dan lingkungan lewat cerita, aksi, dan sudut pandang para kreator."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><WelcomeIntro /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}