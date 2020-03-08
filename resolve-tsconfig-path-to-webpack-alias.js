const { resolve } = require('path')

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({ tsconfigPath = './tsconfig.json', webpackConfigBasePath = __dirname } = {}) {
  const { paths } = require(tsconfigPath).compilerOptions

  const aliases = {}

  Object.keys(paths).forEach(item => {
    const key = item.replace('/*', '')
    aliases[key] = resolve(webpackConfigBasePath, paths[item][0].replace('/*', '').replace('*', ''))
  })

  return aliases
}

module.exports = resolveTsconfigPathsToAlias
