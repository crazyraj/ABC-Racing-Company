import React from 'react';

import './Card.css';
import { images } from '../../../images/index';

const Card = (props: any) => {
	return (
		<div className='card-container'>
			<img
				className='card-image'
				loading='lazy'
				alt={`${props?.fields?.altName}`}
				src={images[`${props?.fields?.image}`]}
			/>
		</div>
	);
};

export default Card;
