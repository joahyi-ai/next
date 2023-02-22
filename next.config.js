// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // reactStrictMode: true,
//   images: {
//     domains: ["s.gravatar.com"],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "i2.wp.com",
      //   port: "",
      //   pathname: "/cdn.auth0.com/avatars/**",
      // },
    ],
  },
};

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   images: {
//     domains: ["s.gravatar.com", "i0.wp.com", "picsum.photos"],
//   },
// };

// module.exports = nextConfig;
