import React, { useContext } from 'react'
import { Store } from './Store'
import { Link } from '@reach/router'

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store)

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episodes</p>
        </div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favorite(s): {state.favorites.length}</Link>
      </header>

      {props.children}
    </div>
  )
}
