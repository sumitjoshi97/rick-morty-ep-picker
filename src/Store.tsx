import React, { createContext, useReducer } from 'react'

interface IState {
  episodes: Array<any>
  favorites: Array<any>
}

export interface IAction {
  type: string
  payload: any
}

const initialState: IState = {
  episodes: [],
  favorites: [],
}

export const Store = createContext<IState | any>(initialState)

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] }
    default:
      return state
  }
}

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  )
}
