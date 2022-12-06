
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },

  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./app'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
