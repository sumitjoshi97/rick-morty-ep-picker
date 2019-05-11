import React from 'react'
import { IEpisode } from './interface'

const EpisodesList: React.FC = (props: any) => {
  const { episodes, toggleFavAction, favorites, store } = props
  const { state, dispatch } = store
  return (
    <section className="episodes-list">
      {episodes.map((episode: IEpisode) => (
        <section key={episode.id} className="episode">
          <img src={episode.image.medium} />
          <div>{episode.name}</div>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              Season: {episode.season} Episode: {episode.number}
            </div>
            <button
              type="button"
              onClick={() => toggleFavAction(state, dispatch, episode)}
            >
              {favorites.find((fav: IEpisode) => fav.id === episode.id)
                ? 'Unfav'
                : 'Fav'}
            </button>
          </section>
        </section>
      ))}
    </section>
  )
}

export default EpisodesList
