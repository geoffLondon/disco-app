import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloProvider } from 'react-apollo'
import Router from './router'
import AWSAppSyncClient, { createAppSyncLink } from 'aws-appsync'
import { ApolloLink } from 'apollo-link'
import theme from './theme/theme'

const client = new AWSAppSyncClient({
    //disableOffline: false,
    disableOffline: true,
  },
  {
    link: ApolloLink.from([
      createAppSyncLink({
        url: '',
        region: 'eu-west-2',
        disableOffline: true,
      }),
    ]),
  },
)

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <MuiThemeProvider theme={theme}>
          <Router/>
      </MuiThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>

)

export default App
