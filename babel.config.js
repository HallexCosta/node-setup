module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@useCases': './src/useCases',
        '@entities': './src/entities',
        '@repositories': './src/repositories',
        '@providers': './src/providers',
        '@utils': './src/utils',
        '@config': './src/config'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}