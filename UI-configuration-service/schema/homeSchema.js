const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const home = [
	{
		id: '1',
		component: 'Section',
		fields: {
			title: 'Upcoming Race',
			children: [
				{
					id: '1',
					component: 'Card',
					fields: {
						image: 'carImage',
						altName: 'Car Race Image',
					},
				},
				{
					id: '2',
					component: 'Card',
					fields: {
						image: 'motorImage',
						altName: 'Bike Race Image',
					},
				},
				{
					id: '3',
					component: 'Card',
					fields: {
						image: 'bikeImage',
						altName: 'Flat Track bike race image',
					},
				},
			],
		},
	},
	{
		id: '2',
		component: 'Section',
		fields: {
			title: 'Shorts',
			children: [
				{
					id: '1',
					component: 'Card',
					fields: {
						image: 'short1',
						altName: 'Shorts - Car race image',
					},
				},
				{
					id: '2',
					component: 'Card',
					fields: {
						image: 'short2',
						altName: 'Shorts - Bike race image',
					},
				},
				{
					id: '3',
					component: 'Card',
					fields: {
						image: 'short3',
						altName: 'Shorts - Flat track bike race image',
					},
				},
			],
		},
	},
	{
		id: '3',
		component: 'Section',
		fields: {
			title: 'Top Racers',
			children: [
				{
					id: '1',
					component: 'Card',
					fields: {
						image: 'topRacer1',
						altName: 'Top male Bike Racer John',
					},
				},
				{
					id: '2',
					component: 'Card',
					fields: {
						image: 'topRacer2',
						altName: 'Top male car Racer Narain',
					},
				},
				{
					id: '3',
					component: 'Card',
					fields: {
						image: 'topRacer3',
						altName: 'Top female Bike Racer Neha',
					},
				},
			],
		},
	},
];

const HomeType = new GraphQLObjectType({
	name: 'Home',
	fields: () => ({
		id: { type: GraphQLID },
		component: { type: GraphQLString },
		fields: {
			type: SectionType,
		},
	}),
});

const SectionType = new GraphQLObjectType({
	name: 'Section',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		children: {
			type: new GraphQLList(CardType),
		},
	}),
});

const CardType = new GraphQLObjectType({
	name: 'Card',
	fields: () => ({
		id: { type: GraphQLString },
		component: { type: GraphQLString },
		fields: {
			type: ImageType,
			image: { type: GraphQLString },
		},
	}),
});

const ImageType = new GraphQLObjectType({
	name: 'Image',
	fields: () => ({
		id: { type: GraphQLID },
		image: { type: GraphQLString },
		altName: { type: GraphQLString },
	}),
});

const RootQueryType = new GraphQLObjectType({
	name: 'Root',
	fields: {
		home: {
			type: new GraphQLList(HomeType),
			resolve: (parent, args) => home,
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQueryType,
});
