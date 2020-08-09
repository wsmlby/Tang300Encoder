// rollup.config.js
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: "Tang300Encoder"
  },
  plugins: [
    commonjs(),
    json({
        compact: true
    })
  ]
};