module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    NODE_ENV: 'test',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.config.cjs'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 0,
    },
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
