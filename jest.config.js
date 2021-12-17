module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/_test_/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	verbose: true
};
