const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devServer: {
    port: 8001,
  },
  webpack: {
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'server' })],
  },
}
