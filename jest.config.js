module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
	collectCoverageFrom: ['src/**/*.ts'],
	globals: {
		'ts-jest': {
			tsConfig: {
				sourceMap: true,
				inlineSourceMap: true
			}
		},
	},
};