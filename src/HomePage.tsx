import React, { lazy, useEffect, useContext, Suspense } from 'react'
import { IEpisodeProps } from './interface'
import { Store } from './Store'
import { fetchDataAction, toggleFavAction } from './Actions'

const EpisodesList = lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  }

  return (
    <div className="app">
      <Suspense fallback={<div>loading...</div>}>
        <div>
          <EpisodesList {...props} />
        </div>
      </Suspense>
    </div>
  )
}
