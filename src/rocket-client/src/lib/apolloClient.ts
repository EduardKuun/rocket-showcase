import { rootConfig } from '../rootConfig';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: rootConfig.graphqlUrl,
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
