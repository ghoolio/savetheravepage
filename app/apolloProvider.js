/* "use client"

import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function ApProvider ({ children }) {
    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
} */