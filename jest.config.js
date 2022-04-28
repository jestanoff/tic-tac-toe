module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  verbose: true,
};
