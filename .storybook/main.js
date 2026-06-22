/** @type { import('@storybook/html').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx)'],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../identity', '../components'],
};
export default config;
