const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const config = {
    reactStrictMode: true,
    output: "export",
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    config.env = {
      API_URL: "http://localhost:3000",
    };
    config.images = {
      unoptimized: true,
    };
  }

  return config;
};
