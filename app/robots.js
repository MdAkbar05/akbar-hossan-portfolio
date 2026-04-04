// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://akbar-hossan-portfolio.vercel.app/sitemap.xml",
  };
}
