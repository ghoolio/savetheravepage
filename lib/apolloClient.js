import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  // graph ql/stepzen endpoint uri!
  uri: 'https://strongsville.stepzen.net/api/getting-started/__graphql',
  headers: {
    Authorization: `Apikey ${process.env.API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;