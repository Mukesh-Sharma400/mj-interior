/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Keep old links working after renaming /aboutus and /contactus
  async redirects() {
    return [
      { source: "/aboutus", destination: "/about-us", permanent: true },
      { source: "/contactus", destination: "/contact-us", permanent: true },
    ];
  },
};

module.exports = nextConfig;
