module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  }