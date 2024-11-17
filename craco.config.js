module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const sourceMapLoader = webpackConfig.module.rules.find(
        (rule) => rule.use && rule.use.some((use) => use.loader === 'source-map-loader')
      );
      if (sourceMapLoader) {
        sourceMapLoader.exclude = /node_modules\/@firebase/;
      }
      return webpackConfig;
    },
  },
}; 