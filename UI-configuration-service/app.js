const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { connectToDb, getDb } = require('./db');

const app = express();
const schema = require('./schema/homeSchema');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// MonogDB connection
let db;
connectToDb((err, dbConnection) => {
	if (!err) {
		// db = dbConnection;
		db = getDb();
		console.log('Connecting to database' + db);
	}
});
app.use('/page/*', (req, res, next) => {
	if (db) {
		next();
	} else {
		res.status(500).json({ error: 'DB connection error' });
	}
});
app.get('/page', (req, res) => {
	let pages = [];
	db.collection('page')
		.find()
		.forEach((page) => pages.push(page))
		.then(() => res.status(200).json(pages))
		.catch((err) => res.status(500).json({ error: 'No Page Found', err: err }));
});
//get page by name using find
app.get('/page/:pageName', (req, res) => {
	let pages = [];
	db.collection('page')
		.find({ page: `${req.params.pageName}` })
		.forEach((page) => pages.push(page))
		.then(() => res.status(200).json(pages))
		.catch((err) => res.status(500).json({ error: 'No Page Found', err: err }));
});
// Get Page by name using findOne
app.get('/page/:pageName', (req, res) => {
	let pageName = req.params.pageName;
	db.collection('page')
		.findOne({ page: `${pageName}` })
		.then((results) => {
			res.status(200).json(results ? results : { message: 'No Page Found' });
		})
		.catch((err) => {
			res.status(500).json({
				error:
					'There is an error while fetching the page. Error: ' + err.message,
			});
		});
});

app.post('/page/add', (req, res) => {
	let page = req.body;
	db.collection('page')
		.insertOne({ ...page })
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((err) => {
			res.status(500).json({
				error:
					'There is an error while inserting section for the give page :  ' +
					pageName,
			});
		});
});

// const sharp = require('sharp');
// const fs = require('fs');
// const directory = './images/top_racers';

// fs.readdirSync(directory).forEach((file) => {
// 	sharp(`${directory}/${file}`)
// 		.resize(555, 375) // width, height
// 		.toFile(`./images/output/${file}`);
// });

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen('4000', () => {
	console.log('server listening on port 4000');
});
