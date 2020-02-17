module.exports = {
	setupFilesAfterEnv: [ '<rootDir>/testSetup.js' ],
	moduleFileExtensions: [ 'js', 'json', 'jsx' ],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/mocks/fileMock.js',
		'\\.(scss|sass|css)$': 'identity-obj-proxy'
	}
};
