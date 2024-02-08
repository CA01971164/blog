module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    // 必要に応じてエイリアスを設定
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/"],

  // その他のJest設定...
};
