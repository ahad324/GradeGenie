const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const publicUrl = "https://gradegenie.netlify.app"; // Replace with your domain

// Define your routes
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/gpa-calculator", changefreq: "weekly", priority: 0.9 },
  { url: "/cgpa-calculator", changefreq: "weekly", priority: 0.9 },
  { url: "/converter", changefreq: "weekly", priority: 0.9 },
];

// Generate the sitemap
const generateSitemap = async () => {
  try {
    const sitemapStream = new SitemapStream({ hostname: publicUrl });

    // Add each route to the sitemap
    routes.forEach((route) => {
      sitemapStream.write(route);
    });

    sitemapStream.end();

    // Convert the stream to a string and save it to the public folder
    const sitemap = await streamToPromise(sitemapStream);
    const outputPath = path.resolve(__dirname, "public", "sitemap.xml");

    createWriteStream(outputPath).write(sitemap);

    console.log("✅ Sitemap generated at public/sitemap.xml");
  } catch (error) {
    console.error("❌ Failed to generate sitemap:", error);
  }
};

generateSitemap();
