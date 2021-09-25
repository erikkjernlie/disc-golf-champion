module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ruby: {
      mapBoxApiKey: process.env.MAP_BOX_API_KEY,
    },
  },
};
