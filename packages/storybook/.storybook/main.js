const config = {
  core: {
    // More on Webpack configuration: https://storybook.js.org/docs/vue/builders/webpack#webpack-5
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.story.mdx', '../stories/**/*.story.@(js|jsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue',
  // More on TypeScript support: https://storybook.js.org/docs/vue/configure/typescript
  // Important: Stories must be written with ".tsx" extension to enable type checking!
  typescript: {
    check: true,
  },
}

module.exports = config
