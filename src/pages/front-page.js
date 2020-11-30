import React from 'react'
import Header from '../components/header'
import AddSong from '../components/song/add-song'
import SongList from '../components/song/song-list'
import SongPlayer from '../components/song/song-player'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: theme.spacing(10),
  }
}))

const FrontPage = () => {
  const classes = useStyles()
  return (
    <div>
      <Header/>
      <Grid container spacing={3}>
        <Grid style={{
          paddingTop: 80
        }} item xs={12} md={7}>
          <AddSong/>
          <SongList/>
        </Grid>
        <Grid item xs={12} md={5}>
          <SongPlayer/>
        </Grid>
      </Grid>
    </div>
  )
}

export default FrontPage
