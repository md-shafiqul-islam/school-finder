import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Finder | Discover the Best Schools Near You",
  description:
    "School Finder helps parents and students explore, compare, and choose the right school based on location, ratings, and programs.",
  keywords: [
    "school finder",
    "education",
    "schools near me",
    "compare schools",
  ],
  authors: [{ name: "Md. Shafiqul Islam" }],
  openGraph: {
    title: "School Finder",
    description: "Find and compare schools near you.",
    siteName: "School Finder",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="flex-1">{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
