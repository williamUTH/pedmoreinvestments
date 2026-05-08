/** @type {import('next').NextConfig} */

// Next 13+
module.exports = {
  output: "export",
  images: { unoptimized: true }, // needed for next/image on static export
  trailingSlash: true, // emit /portfolio/index.html instead of /portfolio.html for plain Apache hosts
  // basePath: '/subfolder' // only if hosting in a subfolder
};
