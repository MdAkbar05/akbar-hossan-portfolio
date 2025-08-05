import { Geist, Geist_Mon, Suranna } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer.jsx";

// surannna font config
// const surannna = Suranna({
//   variable: "--font-suranna",
//   subsets: ["latin"],
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MD. Akbar Hossan Portfolio",
    template: "%s | MD. Akbar Hossan Portfolio",
  },
  description:
    "Professional portfolio of Akbar Hossan, a skilled Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and contact information.",
  keywords: [
    "Akbar Hossan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: "Akbar Hossan",
      url: "https://akbar-hossan-portfolio.vercel.app/",
    },
  ],
  publisher: "MD. Akbar Hossan",
  verification: {
    google: "RGEiwp93GVszmOtSvaKglQqc5OEKIvc-Y9vQTh-sRh4", // Replace with actual code
    other: {
      me: ["akbar.hossan.official@gmail.com"], // Based on contact email on site
    },
  },
  openGraph: {
    title: "MD. Akbar Hossan | Full Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing Akbar Hossan's full stack development projects and skills",
    url: "https://akbar-hossan-portfolio.vercel.app/",
    siteName: "Akbar Hossan Portfolio",
    images: [
      {
        url: "https://res-console.cloudinary.com/dsuvjwkbp/thumbnails/v1/image/upload/v1754389159/aHZqaXlwbnhtb3BiZWJlaXBuYmQ=/drilldown", // Recommend creating an OG image
        width: 1200,
        height: 630,
        alt: "Akbar Hossan Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://akbar-hossan-portfolio.vercel.app/",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={
          "antialiased dark:bg-primary dark:text-quarterary bg-quarterary text-primary" +
          geistSans.variable
        }
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
