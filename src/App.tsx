import React, { useContext } from 'react'
import { Store } from './Store'

const App: React.FC = () => {
  const store = React.useContext(Store)
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episodes</p>
    </>
  )
}

export default App
