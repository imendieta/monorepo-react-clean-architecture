const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    config.entry = "./src/infrastructure/ui/Expo.tsx";
    // Customize the config before returning it.
    return config;
  };