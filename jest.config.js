module.exports = {
	setupFilesAfterEnv: [ '<rootDir>/testSetup.js' ],
	testMatch: [
		'**/__tests__/**/*.js?(x)',
		'**/?(*.)+(spec|test).js?(x)'
	],
	moduleDirectories: [ 'node_modules' ],
	testURL: 'http://localhost',
	moduleFileExtensions: [ 'js', 'json', 'jsx' ],
	transformIgnorePatterns: [ '<rootDir>/node_modules/' ]
};
