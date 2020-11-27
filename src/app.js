import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import theme from './theme/theme'
import AWSAppSyncClient, { createAppSyncLink } from 'aws-appsync'
import { ApolloLink } from 'apollo-link'

const client = new AWSAppSyncClient({
    disableOffline: false,
  },
  {
    link: ApolloLink.from([
      createAppSyncLink({
        url: '',
        region: '',
        disableOffline: true
      })
    ])
  }
)

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Rehydrated>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </MuiThemeProvider>
      </Rehydrated>
    </ApolloHooksProvider>
  </ApolloProvider>

)

export default App
