import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StoreProvider } from './Store'
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './HomePage'
import FavPage from './FavPage'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

const app = (
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/favs" />
      </App>
    </Router>
  </StoreProvider>
)
ReactDOM.render(app, document.getElementById('root'))
