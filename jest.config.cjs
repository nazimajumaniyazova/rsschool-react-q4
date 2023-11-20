module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    NODE_ENV: 'test',
  },

  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/jest.config.cjs',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/utils/http.ts',
    '!<rootDir>/src/store/store.ts',
    '!<rootDir>/src/main.tsx',
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/context/cardListContext.tsx',
    '!<rootDir>/src/context/searchContext.tsx',
    '!<rootDir>/src/components/CardDetail/CardDetail.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
