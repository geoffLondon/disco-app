import React from 'react'
import {
  Avatar,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const useStyles = makeStyles({
  avatar: {
    width: 44,
    height: 44,
  },
  container: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50px, auto, 20px',
    gridGap: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  songInfoContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
})

const QueuedSongList = ({ queue }) => {
  console.log({ queue })
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

  const song = {
    title: 'Purple Rain',
    artist: 'Prince',
    thumbnail: 'http://i3.ytimg.com/vi/TvnYmWpD_T8/hqdefault.jpg',
  }

  return greaterThanMd && (
    <div style={{ margin: '10px 0' }}>
      <Typography color='textSecondary' variant='button'>
        QUEUE (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song}/>
      ))}
    </div>
  )
}

function QueuedSong ({ song }) {
  const classes = useStyles()
  const { thumbnail, artist, title } = song

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} alt='Song thumbnail'/>
      <div className={classes.songInfoContainer}>
        <Typography className={classes.text} variant='subtitle2'>
          {title}
        </Typography>
        <Typography className={classes.text} color='textSecondary' variant='body2'>
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color='error'/>
      </IconButton>
    </div>)
}

export default QueuedSongList
