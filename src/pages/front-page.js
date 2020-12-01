import React from 'react'
import Header from '../components/header'
import AddSong from '../components/song/add-song'
import SongList from '../components/song/song-list'
import SongPlayer from '../components/song/song-player'
import { Grid, useMediaQuery, Hidden } from '@material-ui/core'

const FrontPage = () => {
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'))
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

  return (
    <div>
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
    </div>
  )
}

export default FrontPage
