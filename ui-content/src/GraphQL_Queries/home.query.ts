import { gql } from '@apollo/client';

export const HomeQuery = gql`
	{
		home {
			id
			component
			fields {
				title
				children {
					component
					fields {
						image,
						altName
					}
				}
			}
		}
	}
`;