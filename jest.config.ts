import nextJest from 'next/jest';


const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {

  transformIgnorePatterns: [
    "node_modules/(?!(decode-uri-component|filter-obj|split-on-first|query-string)/)"
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    
      "^query-string$": "<rootDir>/__mocks__/empty.js"
    
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);