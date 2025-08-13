module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          collapseGroups: false,
        },
      },
    },
    {
      name: 'removeAttrs',
      params: { attrs: ['aria-label'] },
    },
  ],
}
