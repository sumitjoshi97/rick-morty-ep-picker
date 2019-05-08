import React, { createContext, useReducer } from 'react'

interface IState {
  episodes: []
  favorites: []
}

interface IAction {
  type: string
  payload: any
}

const initialState: IState = {
  episodes: [],
  favorites: [],
}

export const Store = createContext<IState | any>(initialState)

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
