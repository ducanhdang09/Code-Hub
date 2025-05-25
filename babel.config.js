module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ...các plugin khác (nếu có)
      "react-native-reanimated/plugin", // phải ở cuối
    ],
    // plugins: [
    //   ["module-resolver", {
    //     "alias": {
    //       "@Navigation": "./src/navigation",
    //       "@Components": "./src/components",
    //       "@Screens": "./src/screens",
    //       "@Stores": "./src/stores",
    //       "@Assets": "./src/assets"
    //     },
    //   }]
    // ]
  };
};
