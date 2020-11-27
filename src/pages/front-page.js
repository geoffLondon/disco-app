import React from 'react'
import Header from '../components/header'
import AddSong from '../components/add-song'
import SongList from '../components/song-list'
import SongPlayer from '../components/song-player'

const FrontPage = () => {
  return <div>
    <Header/>
    <AddSong/>
    <SongList/>
    <SongPlayer/>
  </div>
}

export default FrontPage
