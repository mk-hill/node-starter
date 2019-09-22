const presets = [
  [
    '@babel/env',
    {
      targets: {
        // edge: '17',
        // firefox: '60',
        // chrome: '67',
        // safari: '11.1',
        node: '10',
      },
      useBuiltIns: 'usage',
      corejs: '3',
    },
  ],
];

const plugins = [
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-class-properties',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'smart' }],
];

module.exports = { presets, plugins };
