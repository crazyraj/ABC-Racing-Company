module.exports = {
	moduleDirectories: ['src', 'node_modules'],
	rootDir: '.',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(j|t)sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'^.+\\.(css|less|scss)$': 'babel-jest',
		'^axios$': require.resolve('axios'),
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage/jest-sonar-reports',
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};
