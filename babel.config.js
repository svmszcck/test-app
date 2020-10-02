module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            router: "./src/router",
            hooks: "./src/hooks",
            constants: "./src/constants",
            assets: "./src/assets",
            types: "./src/types",
            store: "./src/store",
            services: "./src/services",
          },
        },
      ],
    ],
  };
};
