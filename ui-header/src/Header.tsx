import React, { useState } from 'react';

import './Header.css';
import { StyledHeaderContainer } from './styledComponent/HeaderComponent';
import { Dropdown } from 'common/util';

const Header = () => {
	const LOGO = 'ABC Racing Company';
	const HEADER_CHANNEL = 'HeaderChannel';
	const DROPDOWN_LABEL = 'Location';
	const DROPDOWN_LABEL_ID = 'locationDDLablelId';
	const DROPDOWN_ID = 'locationDDId';
	const DEFAULT_USER_LOCATION = 'US';
	const DROPDOWN_INPUT_LABEL_ID = 'locationDDInputLabelId';
	const DIV = 'div';

	const [locationList, setLocationList] = useState([
		{ key: 'US', label: 'USA' },
		{ key: 'IN', label: 'India' },
	]);
	const [userLocation, setUserLocation] = useState(DEFAULT_USER_LOCATION);

	const handleLocation = (event: any) => {
		const value = event.target.value;
		setUserLocation(value);
		/**
		 * Broadcasting the user location to other MFEs
		 */
		const HeaderChannelPublisher = new BroadcastChannel(HEADER_CHANNEL);
		HeaderChannelPublisher.postMessage({ userLocation: value });
	};

	return (
		<StyledHeaderContainer
			component={DIV}
			className='header-container'
			userlocation={userLocation}>
			<div className='logo'>{LOGO}</div>
			<Dropdown
				labelId={DROPDOWN_LABEL_ID}
				id={DROPDOWN_ID}
				value={`${userLocation}`}
				onChange={handleLocation}
				list={locationList}
				inputLabel={{ id: { DROPDOWN_INPUT_LABEL_ID }, label: DROPDOWN_LABEL }}
			/>
		</StyledHeaderContainer>
	);
};

export default Header;
