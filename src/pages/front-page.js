import React, { createContext, useContext, useReducer } from 'react'
import Header from '../components/header'
import AddSong from '../components/song/add-song'
import SongList from '../components/song/song-list'
import SongPlayer from '../components/song/song-player'
import { Grid, useMediaQuery, Hidden } from '@material-ui/core'
import songReducer from '../reducer'

export const SongContext = createContext({
  song: {
    id: 'e2d4be0f-4cf6-4f70-b2d5-61879d66af03',
    title: 'Deep House Mix',
    artist: 'Mr Gand',
    thumbnail: 'http://img.youtube.com/vi/fLH5sQAiHHg/0.jpg',
    duration: '3601',
    url: 'https://www.youtube.com/watch?v=fLH5sQAiHHg'
  },
  isPlaying: false,
})

const FrontPage = () => {
  const initialSongState = useContext(SongContext)
  const [state, dispatch] = useReducer(songReducer, initialSongState)
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'))
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only='xs'>
        <Header/>
      </Hidden>
      <Grid container spacing={3}>
        <Grid style={{
          paddingTop: greaterThanSm ? 80 : 20,
        }} item xs={12} md={7}>
          <AddSong/>
          <SongList/>
        </Grid>
        <Grid style={
          greaterThanMd
            ? {
              position: 'fixed',
              width: '100%',
              right: 0,
              top: 70,
            }
            : {
              position: 'fixed',
              width: '100%',
              left: 0,
              bottom: 0,
            }}
              item
              xs={12}
              md={5}
        >
          <SongPlayer/>
        </Grid>
      </Grid>
    </SongContext.Provider>
  )
}

export default FrontPage
