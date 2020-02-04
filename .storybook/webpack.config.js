const path = require('path');
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.(stories|story)\.mdx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@mdx-js/loader",
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
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
