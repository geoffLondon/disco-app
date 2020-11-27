import React from 'react'
import { HeadsetMicTwoTone } from '@material-ui/icons'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}))

const NewAppBar = () => {
  const classes = useStyles()
  return (
  <AppBar color='primary' position='fixed'>
    <Toolbar>
      <HeadsetMicTwoTone/>
      <Typography className={classes.title} variant='h6' component='h1'>
        Disco Music Share
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default NewAppBar
