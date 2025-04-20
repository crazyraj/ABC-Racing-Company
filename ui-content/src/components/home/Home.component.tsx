import React from 'react';

import Box from '@material-ui/core/Box';
import { NetworkStatus, useQuery } from '@apollo/client';

import './Home.css';
import { HomeQuery } from '@/GraphQL_Queries/home.query';
import { components } from '../components.mapping';

/**
 * Achieving Veritcal Extendibility in terms of adding and rendering business features
 * by having the Feature MFE/Component configurations on DB and serve it through
 * UI configuration serivce with help of GraphQL
 */

const Home = (props: any) => {
	const { loading, error, data } = useQuery(HomeQuery);
	if (loading) return null;
	if (error) return <p>Error{error.message}</p>;
	return (
		<Box component='div' className='home-container'>
			{data.home.map((sectionItem: any) => {
				const Component = components[sectionItem.component];
				return (
					<Component
						key={sectionItem.id}
						title={sectionItem.fields.title}
						children={sectionItem.fields.children}
					/>
				);
			})}
		</Box>
	);
};

export default Home;
