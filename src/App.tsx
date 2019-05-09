import React, { useContext, useEffect } from 'react'
import { Store } from './Store'
import { IEpisode, IAction } from './interface'

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

  const toggleNavAction = (episode: IEpisode): IAction =>
    dispatch({
      type: 'ADD_FAV',
      payload: episode,
    })

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episodes</p>
      <section>
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id}>
            <div>{episode.name}</div>
            <section>
              <img src={episode.image.medium} />
              Season: {episode.season} Number: {episode.number}
            </section>
          </section>
        ))}
      </section>
    </>
  )
}

export default App
