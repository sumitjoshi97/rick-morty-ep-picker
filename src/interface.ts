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
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
}

export interface IAction {
  type: string
  payload: any
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: { state: IState; dispatch: any }
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction
  favorites: Array<IEpisode>
}
