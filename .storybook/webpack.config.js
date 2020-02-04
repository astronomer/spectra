const path = require('path');

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: require.resolve('babel-loader'),
          }
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
            }
          }
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
});
