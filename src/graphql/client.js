import ApolloClient from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://disco-share-api.hasura.app/v1/graphql',
    options: {
      reconnect: true
    }
  }),
  cache: new InMemoryCache()
})

// import ApolloClient from 'apollo-boost'
//
// const client = new ApolloClient({
//   uri: 'https://disco-share-api.hasura.app/v1/graphql'
// })

export default client
