const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');

module.exports = {
  webpack: cfg => {
    cfg.plugins = cfg.plugins || [];

    cfg.resolve.alias = {
      ...cfg.resolve.alias,
      ...resolveTsconfigPathsToAlias()
    };

    cfg.plugins = [...cfg.plugins];

    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    });

    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    );

    return cfg;
  }
};
