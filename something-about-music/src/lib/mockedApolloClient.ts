// src/lib/mockedApolloClient.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { GraphQLSchema, graphql } from 'graphql';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Define your Apollo Client
const client = new ApolloClient({
    uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;

// Define GraphQL type definitions
const typeDefs = `
  type Query {
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    excerpt: String!
    image: String!
    slug: String!
  }
`;

// Define mocks for your schema
const mocks = {
    Query: () => ({
        posts: () => [
            {
                id: '1',
                title: 'Mocked Post',
                excerpt: 'This is a mocked post.',
                image: 'https://via.placeholder.com/150',
                slug: 'mocked-post',
            },
        ],
    }),
};

// Create an executable schema with mocks
const schema = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({ schema, mocks });

// Function to execute mock queries
const executeMockQuery = async (query: any) => {
    const response = await graphql({
        schema: schemaWithMocks,
        source: query,
    });
    return response;
};

// Mocked Apollo Provider component
export const MockedApolloProvider = ({ children }: { children: React.ReactNode }) => (
    <MockedProvider>
    { children }
    < /MockedProvider>
);
