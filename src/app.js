import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloProvider } from 'react-apollo'
import Router from './router'
import theme from './theme/theme'
import { CssBaseline } from '@material-ui/core'
import client from './graphql/client'

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Router/>
      </MuiThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
)

export default App
