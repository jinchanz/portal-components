module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: "@alilc",
        extraAssets: [
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/assets-prod.json'
        ]
      },
    ],
  ],
};
