import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './App.css';
import Home from './components/home/Home.component';

// Setup the appollo client
const apolloClient = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache({ resultCaching: false }),
});

function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<div className='App'>
				<Home />
			</div>
		</ApolloProvider>
	);
}

export default App;
