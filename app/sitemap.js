// app/sitemap.ts

export default function sitemap() {
  return [
    {
      url: "https://akbar-hossan-portfolio.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/experiences",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/skills",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/educations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/achievements",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://akbar-hossan-portfolio.vercel.app/contacts",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
