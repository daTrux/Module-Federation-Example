const {merge} = require("webpack-merge");
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  output: {
    publicPath: "auto",
    uniqueName: "core-ui/remote-angular-template",
    scriptType: 'text/javascript'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: false,
    minimize: false,
  }
});
