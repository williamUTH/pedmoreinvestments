/** @type {import('next').NextConfig} */

// Next 13+
module.exports = {
  output: "export",
  images: { unoptimized: true }, // needed for next/image on static export
  // basePath: '/subfolder' // only if hosting in a subfolder
};
