module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/example/src',
  ],
  moduleDirectories: ['node_modules', 'example/node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};
