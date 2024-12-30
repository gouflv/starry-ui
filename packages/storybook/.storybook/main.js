const path = require('path')
const vue2Jsx = require('@vitejs/plugin-vue2-jsx')
const { mergeConfig } = require('vite')

// https://github.com/storybookjs/builder-vite/tree/main/examples/vue2.7
// https://github.com/Djaler/storybook-builder-vite-vue2
// https://github.com/georgwittberger/vue2-library-template (webpack)

const config = {
  framework: '@storybook/vue',
  core: {
    builder: '@storybook/builder-vite',
    // we don't want to muck up the data when we're working on the builder
    disableTelemetry: true,
  },
  stories: ['../stories/**/*.story.mdx', '../stories/**/*.story.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [vue2Jsx()],
      resolve: {
        // https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891
        dedupe: ['@storybook/client-api'],
      },
      optimizeDeps: {
        include: [
          '@storybook/vue/dist/esm/client/preview/config',
          '@storybook/vue/dist/esm/client/docs/config',
          '@storybook/addon-docs/preview.js',
          '@storybook/addon-actions/preview.js',
          '@storybook/addon-backgrounds/preview.js',
          '@storybook/addon-measure/preview.js',
          '@storybook/addon-outline/preview.js',
        ],
      },
      alias: {
        '@': path.resolve(__dirname, '../../components/src'),
        '@starry-ui/components': path.resolve(
          __dirname,
          '../../components/src',
        ),
      },
      define: {
        global: 'window',
      },
      build: {
        rollupOptions: {
          plugins: {
            resolveId: function (code) {
              if (code === 'react')
                return path.resolve(require.resolve('react'))
            },
          },
        },
      },
    })

    // config.define = {
    //   ...config.define,
    //   global: 'window',
    // }
  },
}

module.exports = config
