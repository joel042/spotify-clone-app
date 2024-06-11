import React from 'react'
import "../asserts/css/Player.css"
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({spotify}) => {
  return (
    <div className='Player'>
    <div className='Player_body'>

    <Sidebar />

    <Body />

    </div>

    <Footer />
    </div>
  )
}

export default Player
