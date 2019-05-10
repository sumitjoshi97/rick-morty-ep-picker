import React, { lazy, useContext, useEffect, Suspense } from 'react'
import { Store } from './Store'
import { IEpisode, IAction, IEpisodeProps } from './interface'

const EpisodesList = lazy<any>(() => import('./EpisodesList'))

const App: React.FC = () => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && FetchDataAction()
  })

  const FetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      )
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      }
    }
    return dispatch(dispatchObj)
  }

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites,
  }

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episodes</p>
        </div>
        <div>Favorite(s): {state.favorites.length}</div>
      </div>

      <Suspense fallback={<div>loading...</div>}>
        <div>
          <EpisodesList {...props} />
        </div>
      </Suspense>
    </div>
  )
}

export default App
