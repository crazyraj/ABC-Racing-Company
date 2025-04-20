import React from 'react';
import './Footer.css';
import { StyledFooterContainer } from './styledComponent/FooterComponent';

type Footer = {
	userLocation: string;
};

const Footer = ({ ...props }: Footer) => {
	const DIV = 'div';
	const COPY_RIGHT_LABEL = `Copy righted from ${new Date().getFullYear()}`;

	return (
		<StyledFooterContainer
			component={DIV}
			className='footer-container'
			userlocation={props?.userLocation}>
			<div className='copy-right'>{COPY_RIGHT_LABEL}</div>
		</StyledFooterContainer>
	);
};

export default Footer;
