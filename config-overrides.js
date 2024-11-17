module.exports = function override(config, env) {
  // Disable source-map-loader for Firebase files
  config.module.rules.forEach((rule) => {
    if (rule.use && rule.use.some((use) => use.loader === 'source-map-loader')) {
      rule.exclude = /node_modules\/@firebase/;
    }
  });

  return config;
}; 