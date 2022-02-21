const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // For path aliases
  moduleNameMapper: {
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/constants(.*)$': '<rootDir>/src/constants/$1',
    '^@/modules(.*)$': '<rootDir>/src/modules/$1',
    '^@/services(.*)$': '<rootDir>/src/services/$1',
    '^@/store(.*)$': '<rootDir>/src/store/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);