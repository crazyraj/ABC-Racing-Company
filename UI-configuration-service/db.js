const { MongoClient } = require('mongodb');
let dbConnection;

module.exports = {
	connectToDb: (cb) => {
		MongoClient.connect('mongodb://localhost:27017/ABCUIConfigurationDB')
			.then((client) => {
				dbConnection = client.db();
				return cb(null, dbConnection);
			})
			.catch((err) => cb(err));
	},
	getDb: () => dbConnection,
};
