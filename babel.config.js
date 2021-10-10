module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const isDevelopment = process.env.NODE_ENV !== "production";

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      isDevelopment && require.resolve("react-refresh/babel"),
      "@babel/plugin-proposal-class-properties",
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true,
        },
      ],
    ].filter(Boolean),
  };
};
