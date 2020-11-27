import React from 'react'
import Header from '../components/header'
import AddSong from '../components/add-song'
import SongList from '../components/song-list'
import SongPlayer from '../components/song-player'
import { Grid, withStyles } from '@material-ui/core'

const styles = theme => ({
  profileIcon: {
    marginLeft: theme.spacing(1),
  },
  menu: {
    marginTop: theme.spacing(5),
  },
})

const FrontPage = () => {
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

export default withStyles(styles)(FrontPage)
