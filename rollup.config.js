import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.jsx';
const OUTPUT_NAME = 'spectra';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  classnames: 'classnames',
};

const PLUGINS = [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.css'],
  }),
  commonjs(),
  localResolve(),
  babel({
    exclude: 'node_modules/**',
  }),
  postcss({
    extract: true,
    plugins: [
      autoprefixer,
    ],
  }),
  filesize(),
  copy({
    targets: [
      { src: 'src/styles/base.css', dest: 'dist/css/' },
      { src: 'src/styles/variables.css', dest: 'dist/css/' },
      { src: 'src/styles/mixins.css', dest: 'dist/css/' },
      { src: 'src/styles/fonts/**', dest: 'dist/css/fonts' },
      { src: 'src/styles/vendor/**', dest: 'dist/css/vendor' },
      { src: 'README.md', dest: 'dist/' },
    ],
  }),
];

const EXTERNAL = [
  'react',
  'react-dom',
  'classnames',
  'components',
  'react-is',
  'prop-types',
  'react-router-dom',
  'dayjs',
  'react-icons/fi',
  '@tippy.js/react',
  'toasted-notes',
];

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  {
    file: pkg.main,
    format: 'esm',
    sourcemap: true,
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
