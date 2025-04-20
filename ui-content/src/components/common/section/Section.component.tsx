import React from 'react';

import Box from '@material-ui/core/Box';

import { components } from '../../components.mapping';

/**
 * Achieving Horizontal Extendibility in terms of adding and rendering business features
 * by having the Feature MFE/Component configurations on DB and serve it through
 * UI configuration serivce with help of GraphQL
 */

const Section = (props: any) => {
	return (
		<>
			<Box>
				<h3 className='section-title'>{props?.title}</h3>
			</Box>
			<Box className='section-content'>
				{props?.children?.map((child: any) => {
					const Component = components[child.component];
					return (
						<Box key={child?.id}>
							<Component fields={child?.fields} />
						</Box>
					);
				})}
			</Box>
		</>
	);
};

export default Section;
