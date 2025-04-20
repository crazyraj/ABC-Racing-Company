import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';

/**
 * Subscribe `HeaderChannel` Broadcasting to get user location
 */
const HEADER_CHANNEL = 'HeaderChannel';
const HeaderChannelSubscribe = new BroadcastChannel(HEADER_CHANNEL);

function App() {
	const [userLocation, SetUserLocation] = useState('');
	useEffect(() => {
		HeaderChannelSubscribe.onmessage = (event: MessageEvent) => {
			SetUserLocation(event.data?.userLocation);
		};
	}, []);
	return <Footer userLocation={userLocation} />;
}

export default App;
