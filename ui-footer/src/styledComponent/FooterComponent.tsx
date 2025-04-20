import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import { designSystemTheme } from 'common/util';

export const StyledFooterContainer = styled(({ ...props }) => (
	<Box {...props} />
))`
	&.footer-container {
		background-color: ${(props) =>
			designSystemTheme[props?.userlocation]?.footer?.backgroundColor ||
			'rgb(190, 186, 186)'};
	}
`;
