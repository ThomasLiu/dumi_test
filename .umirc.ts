import { defineConfig } from 'dumi';

const isProduction = () => process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Library Name',
  publicPath: isProduction() ? '/dumi_test/' : '/',
  hash: true,
  ignoreMomentLocale: true,
  // more config: https://d.umijs.org/config
});
