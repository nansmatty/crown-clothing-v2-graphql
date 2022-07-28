import { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

const COLLECTIONS = gql`
	query {
		collections {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;

export const CategoriesProvider = ({ children }) => {
	const { loading, error, data } = useQuery(COLLECTIONS);

	console.log(data);

	const [categoriesMap, setCategoriesMap] = useState({});

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
