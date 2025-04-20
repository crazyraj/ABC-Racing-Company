const dependencies = require('./package.json').dependencies;

module.exports = {
	...dependencies,
	react: {
		singleton: true,
		requiredVersion: dependencies['react'],
	},
	'react-dom': {
		singleton: true,
		requiredVersion: dependencies['react-dom'],
	},
	'styled-components': {
		singleton: true,
	},
};
