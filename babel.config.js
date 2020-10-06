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
            app_constants: "./src/app_constants",
            assets: "./src/assets",
            types: "./src/types",
            store: "./src/store",
            services: "./src/services",
            utils: "./src/utils",
            app_config: "./src/app_config",
          },
        },
      ],
    ],
  };
};
