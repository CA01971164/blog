const { override, addBabelPlugins } = require("customize-cra");

module.exports = {
  jest: function (config) {
    config.transform = {
      ...config.transform,
      "^.+\\.jsx?$": "babel-jest", // JSXとJavaScriptファイルをbabel-jestを使ってトランスパイル
      "^.+\\.tsx?$": "ts-jest", // TypeScriptファイルの場合はts-jestを使う
    };
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      "^axios$": "<rootDir>/node_modules/axios/index.js",
    };
    config.transformIgnorePatterns = ["/node_modules/(?!axios).+\\.js$"];
    return config;
  },
};
