/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.prosimcae.com",
  generateRobotsTxt: true, // Automatically generate robots.txt
  alternateRefs: [
    {
      href: "https://www.prosimcae.com/es",
      hreflang: "es",
    },
    {
      href: "https://www.prosimcae.com/en",
      hreflang: "en",
    },
  ],
};
