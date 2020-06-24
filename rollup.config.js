import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.jsx';
const OUTPUT_NAME = 'spectra';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [
      autoprefixer,
    ],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs(),
  filesize(),
  copy({
    targets: [
      { src: 'src/styles/variables.css', dest: 'dist/' },
      { src: 'src/styles/mixins.css', dest: 'dist/' },
      { src: 'src/styles/fonts/**', dest: 'dist/' },
    ],
  }),
];

const EXTERNAL = [
  'react',
  'react-dom',
];

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'cjs',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
