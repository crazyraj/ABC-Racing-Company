import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import { designSystemTheme } from 'common/util';

export const StyledHeaderContainer = styled(({ ...props }) => (
	<Box {...props} />
))`
	&.header-container {
		background-color: ${(props) =>
			designSystemTheme[props?.userlocation]?.header?.backgroundColor ||
			'rgb(241, 14, 14)'};
		.MuiFormLabel-root.Mui-focused {
			color: antiquewhite;
		}
		.MuiInput-underline:before {
			border-bottom: none;
		}
		.MuiInput-underline:after {
			border-bottom: 2px solid white;
		}
		.MuiInput-underline:hover:not(.Mui-disabled):before {
			border-bottom: 2px solid white;
		}
		.MuiSelect-icon {
			color: white;
		}
	}
`;
