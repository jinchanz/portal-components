module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: "@alilc"
      },
    ],
  ],
};
