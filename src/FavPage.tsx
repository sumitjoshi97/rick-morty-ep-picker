import React, { lazy, useContext, Suspense } from 'react'
import { Store } from './Store'
import { toggleFavAction } from './Actions'
import { IEpisodeProps } from './interface'

const EpisodesList = lazy<any>(() => import('./EpisodesList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <EpisodesList {...props} />
      </div>
    </Suspense>
  )
}
