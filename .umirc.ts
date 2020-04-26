import { defineConfig } from 'dumi';

const isProduction = () => process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Library Name',
  // publicPath: isProduction() ? '/dumi_test/' : '/',
  base: '/dumi_test/',
  publicPath: '/dumi_test/',
  hash: true,
  ignoreMomentLocale: true,
  // more config: https://d.umijs.org/config
});
