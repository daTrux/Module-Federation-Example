const { merge } = require('webpack-merge');
const WebpackStringReplacer = require('@fts/webpack-string-replacer');
const common = require('./webpack.config.common.js');

const uniqueName = 'core-ui/remote-angular-template';
const remotePath = `/${uniqueName}/`;

module.exports = merge(common, {
  plugins: [new WebpackStringReplacer(
    /url\(([^)]*\.(png|jpg|svg|ttf|eot|woff2|woff))[^)]*\)/g,
    `url(${remotePath}$1)`,
    ['.css', '.js']
  )],
  output: {
    publicPath: remotePath,
    uniqueName: uniqueName,
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  }
});
