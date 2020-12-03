import React, { useContext, useEffect, useState } from 'react'
import {
  makeStyles,
  CircularProgress,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { Pause, PlayArrow, Save } from '@material-ui/icons'
import { useMutation, useSubscription } from 'react-apollo-hooks'
import { GET_SONGS } from '../../graphql/subscription'
import { SongContext } from '../../pages/front-page'
import { ADD_OR_REMOVE_FROM_QUEUE } from '../../graphql/mutation'

const useStyles = makeStyles(theme => ({
  spinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  thumbnail: {
    objectFit: 'cover',
    width: 140,
    height: 140,
  },
}))

const SongList = () => {
  const classes = useStyles()
  const { data, loading, error } = useSubscription(GET_SONGS)

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
  const { id } = song
  const classes = useStyles()
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE)
  const { state, dispatch } = useContext(SongContext)
  const [currentSongPlaying, setCurrentSongPlaying] = useState(false)
  const { title, artist, thumbnail } = song

  useEffect(() => {
    const isSongPlaying = state.isPlaying && id === state.song.id
    setCurrentSongPlaying(isSongPlaying)
  }, [id, state.song.id, state.isPlaying])

  function handleTogglePlay () {
    dispatch({ type: 'SET_SONG', payload: { song } })
    dispatch(state.isPlaying ? { type: 'PAUSE_SONG' } : { type: 'PLAY_SONG' })
  }

  function handleAddOrRemoveFromQueue () {
    addOrRemoveFromQueue({
      variables: { input: { ...song, __typename: 'Song' }}
    })
  }

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
        <IconButton onClick={handleTogglePlay} size='small' color='primary'>
          {currentSongPlaying ? <Pause/> : <PlayArrow/>}
        </IconButton>
        <IconButton onClick={handleAddOrRemoveFromQueue} size='small' color='secondary'>
          <Save/>
        </IconButton>
      </CardActions>
    </div>
  </Card>
}

export default SongList
