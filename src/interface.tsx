/**
|--------------------------------------------------
|  All the interfaces
|--------------------------------------------------
*/

export interface IEpisode {
  id: number
  airdate: string
  airstamp: string
  airtime: string
  name: string
  image: { medium: string; original: string }
  season: number
  number: number
  runtime: number
  summary: string
}

export interface IState {
  episodes: Array<any>
  favorites: Array<any>
}

export interface IAction {
  type: string
  payload: any
}
