import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
  namespace: 'webcomponents',
  plugins: [
    nodePolyfills({
      sourceMap: false
    }),
    sass({
      includePaths: [
        'node_modules'
      ]
    })
  ],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
