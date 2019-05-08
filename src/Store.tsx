import React from 'react'

interface IState {
  episodes: []
  favorites: []
}

const initialState: IState = {
  episodes: [],
  favorites: [],
}

export const Store = React.createContext(initialState)

const reducer = () => {}

export const StoreProvider = (props: any) => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
