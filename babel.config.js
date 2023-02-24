module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            hooks: './hooks/index.ts',
            assets: './assets',
            types: './types'
          }
        }
      ]
    ]
  };
};
