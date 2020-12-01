import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://disco-share-api.hasura.app/v1/graphql'
})
