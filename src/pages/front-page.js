import React from 'react'
import Header from '../components/header'
import AddSong from '../components/song/add-song'
import SongList from '../components/song/song-list'
import SongPlayer from '../components/song/song-player'
import { Grid } from '@material-ui/core'

function FrontPage () {
  return <div>
    <Header/>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <AddSong/>
        <SongList/>
      </Grid>
      <Grid item xs={12} md={5}>
        <SongPlayer/>
      </Grid>
    </Grid>
  </div>
}

export default FrontPage
