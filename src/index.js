import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const rootElement = document.getElementById('root');

const client = new ApolloClient({
	uri: 'https://crwn-clothing.com/',
	cache: new InMemoryCache(),
});

render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<UserProvider>
					<CategoriesProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</CategoriesProvider>
				</UserProvider>
			</BrowserRouter>
		</ApolloProvider>
	</React.StrictMode>,
	rootElement
);
