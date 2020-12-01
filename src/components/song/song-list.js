import React from 'react'
import {
  makeStyles,
  CircularProgress,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { PlayArrow, Save } from '@material-ui/icons'
import { useQuery } from 'react-apollo-hooks'
import { GET_SONGS } from '../../graphql/queries'

const useStyles = makeStyles(theme => ({
  spinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    margin: theme.spacing(3)
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  thumbnail: {
    objectFit: 'cover',
    width: 140,
    height: 140
  }
}))



const SongList = () => {
  const classes = useStyles()
  const { data, loading, error } = useQuery(GET_SONGS)

  // const song = {
  //   title: 'Purple Rain',
  //   artist: 'Prince',
  //   thumbnail: 'http://i3.ytimg.com/vi/TvnYmWpD_T8/hqdefault.jpg',
  // }

  if (loading) {
    return (
      <div className={classes.spinner}>
        <CircularProgress/>
      </div>
    )
  }
  if (error) return <div>Error fetching songs!</div>
  return (
    <div>
      {data.songs.map(song => (
        <Song key={song.id} song={song}/>
      ))}
    </div>
  )
}

function Song ({ song }) {
  const classes = useStyles()
  const { title, artist, thumbnail } = song

  return <Card className={classes.container}>
    <div className={classes.songInfoContainer}>
      <CardMedia image={thumbnail} className={classes.thumbnail}/>
      <div className={classes.songInfo}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body1' component='p' color='textSecondary'>
            {artist}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <IconButton size='small' color='primary'>
          <PlayArrow/>
        </IconButton>
        <IconButton size='small' color='secondary'>
          <Save />
        </IconButton>
      </CardActions>
    </div>
  </Card>
}

export default SongList
