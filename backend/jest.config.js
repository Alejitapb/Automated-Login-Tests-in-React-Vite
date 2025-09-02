module.exports = {
    testEnvironment: 'node',
    coverageDirectory: '../coverage',
    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!jest.config.cjs',
        '!server.js'
    ],
    testMatch: ['**/__tests__/**/*.test.js']
};