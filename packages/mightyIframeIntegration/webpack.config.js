const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = [
  // Конфигурация для веб-версии
  {
    entry: './src/index.js',  // Основной файл для веб-версии
    output: {
      filename: 'mightyIframeIntegration.js',  // Выходной файл для веб-версии
      path: path.resolve(__dirname, 'dist'),
      library: 'mightyIframeIntegration',
      libraryTarget: 'umd',  // Универсальный модульный формат (UMD)
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.js$/,  // Обрабатываем JS файлы
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/mightyIframeIntegration.react.d.ts', to: 'mightyIframeIntegration.react.d.ts' },
        ],
      }),
    ],
    mode: 'production',
  },
  // Конфигурация для React-версии
  {
    entry: './src/react/index.ts',  // Входная точка для React-версии
    output: {
      filename: 'mightyIframeIntegration.react.js',  // Выходной файл для React-версии
      path: path.resolve(__dirname, 'dist'),
      library: 'MightyIframeReact',
      libraryTarget: 'umd',  // Универсальный модульный формат (UMD)
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,  // Обрабатываем JS и TSX файлы
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',  // Пресет для современных возможностей JS
                '@babel/preset-react',  // Пресет для поддержки React
                '@babel/preset-typescript'  // Пресет для поддержки TypeScript
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Поддержка расширений для JS, TS, JSX, TSX
    },
    externals: {
      react: 'react',  
      'react-dom': 'ReactDOM',
    },
    mode: 'production',
  },
];
