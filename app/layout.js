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
  title: "Portfolio of MD. Akbar Hossan | Home",
  description:
    "Introduction of MD. Akbar Hossan Portfolio. A Frontend Developer from Bangladesh.",
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
